
module DashBlueprint
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/breadcrumbs.jl")
include("jl/button.jl")
include("jl/buttongroup.jl")
include("jl/card.jl")
include("jl/checkbox.jl")
include("jl/checkboxgroup.jl")
include("jl/collapse.jl")
include("jl/collapsecard.jl")
include("jl/collapsecardlist.jl")
include("jl/dateinput.jl")
include("jl/datepicker.jl")
include("jl/daterangeinput.jl")
include("jl/daterangepicker.jl")
include("jl/dialog.jl")
include("jl/divider.jl")
include("jl/drawer.jl")
include("jl/editabletext.jl")
include("jl/formgroup.jl")
include("jl/h1.jl")
include("jl/h2.jl")
include("jl/h3.jl")
include("jl/h4.jl")
include("jl/h5.jl")
include("jl/h6.jl")
include("jl/htmltable.jl")
include("jl/hotkey.jl")
include("jl/icon.jl")
include("jl/inputgroup.jl")
include("jl/link.jl")
include("jl/listgroup.jl")
include("jl/menu.jl")
include("jl/menudivider.jl")
include("jl/menuitem.jl")
include("jl/multiselect.jl")
include("jl/navbar.jl")
include("jl/navbardivider.jl")
include("jl/navbargroup.jl")
include("jl/navbarheading.jl")
include("jl/nonidealstate.jl")
include("jl/numericinput.jl")
include("jl/omnibar.jl")
include("jl/omnibarasync.jl")
include("jl/panelstack.jl")
include("jl/popover.jl")
include("jl/progressbar.jl")
include("jl/radiogroup.jl")
include("jl/rawcollapse.jl")
include("jl/resizesensor.jl")
include("jl/select.jl")
include("jl/slider.jl")
include("jl/spinner.jl")
include("jl/switch.jl")
include("jl/tab.jl")
include("jl/tabs.jl")
include("jl/tag.jl")
include("jl/tbody.jl")
include("jl/text.jl")
include("jl/toaster.jl")
include("jl/togglebuttongroup.jl")
include("jl/tooltip.jl")
include("jl/tr.jl")
include("jl/tree.jl")
include("jl/histogram.jl")
include("jl/propertytable.jl")
include("jl/sparkline.jl")

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
),
DashBase.Resource(
    relative_package_path = "blueprint.css",
    external_url = "https://unpkg.com/@blueprintjs/core@3.0.0-beta.1/lib/css/blueprint.css",
    dynamic = nothing,
    async = nothing,
    type = :css
)
            ]
        )

    )
end
end
