const { App } = require('@nodegui/react-nodegui')

function App() {
    return (
        <Window title="My Gui (graphical user interface) App">
            <Text>"Hello!"</Text>
        </Window>
    );
}

App.main();