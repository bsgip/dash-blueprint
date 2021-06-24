
module DashBlueprint
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("breadcrumbs.jl")
include("button.jl")
include("buttongroup.jl")
include("card.jl")
include("checkbox.jl")
include("checkboxgroup.jl")
include("collapse.jl")
include("collapsecard.jl")
include("collapsecardlist.jl")
include("dateinput.jl")
include("datepicker.jl")
include("daterangeinput.jl")
include("daterangepicker.jl")
include("divider.jl")
include("drawer.jl")
include("editabletext.jl")
include("formgroup.jl")
include("h1.jl")
include("h2.jl")
include("h3.jl")
include("h4.jl")
include("h5.jl")
include("h6.jl")
include("htmltable.jl")
include("hotkey.jl")
include("icon.jl")
include("inputgroup.jl")
include("link.jl")
include("listgroup.jl")
include("menu.jl")
include("menudivider.jl")
include("menuitem.jl")
include("multiselect.jl")
include("navbar.jl")
include("navbardivider.jl")
include("navbargroup.jl")
include("navbarheading.jl")
include("nonidealstate.jl")
include("numericinput.jl")
include("omnibar.jl")
include("omnibarasync.jl")
include("panelstack.jl")
include("popover.jl")
include("progressbar.jl")
include("radiogroup.jl")
include("rawcollapse.jl")
include("resizesensor.jl")
include("select.jl")
include("slider.jl")
include("spinner.jl")
include("switch.jl")
include("tab.jl")
include("tabs.jl")
include("tag.jl")
include("tbody.jl")
include("text.jl")
include("toaster.jl")
include("togglebuttongroup.jl")
include("tooltip.jl")
include("tr.jl")
include("tree.jl")
include("histogram.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_blueprint",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_blueprint.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_blueprint.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
