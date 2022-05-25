// import '../dash_blueprint/blueprint.css';
// import '../dash_blueprint/blueprint-datetime.css';
// import '../dash_blueprint/blueprint-docs.css';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
