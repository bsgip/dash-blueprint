"""Some utilities for creating the structures required to display a tree
"""
from collections import defaultdict


class TreeNode:
    def __init__(self, id_, label, is_expanded=False, icon='document', secondary_label=None, child_nodes=None, has_caret=False):
        self.id_ = id_
        self.icon = icon
        self.is_expanded = is_expanded
        self.label = label
        self.secondary_label = secondary_label
        self.child_nodes = child_nodes or defaultdict(lambda x: FolderNode(x, x.split('.')[-1]))
        self.has_caret = has_caret

    def to_dict(self):
        return {
            'id': self.id_,
            'icon': self.icon,
            'isExpanded': self.is_expanded,
            'hasCaret': self.has_caret,
            'label': self.label,
            'secondaryLabel': self.secondary_label,
            'childNodes': [
                child.to_dict() for child in self.child_nodes.values()
            ]
        }

class FolderNode(TreeNode):
    def __init__(self, id_, label, is_expanded=False, icon='folder-close', secondary_label=None, child_nodes=None, has_caret=True):
        super().__init__(id_, label, is_expanded, icon, secondary_label, child_nodes, has_caret)
