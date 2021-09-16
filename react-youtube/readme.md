REACT VITORE KIVABYE KAJ KORE (REACT UNDER THE HOOD)
const Video = props => {
    return React.createElement("div", {}, [React.createElement("h2", {}, props.title),
        React.createElement("h3", {}, props.dateAdded),
        React.createElement("h3", {}, props.channel)
    ]);

}

const App = () => {
        // "element" {attribute} "content"
        return React.createElement("div", {}, [React.createElement("h2", {}, "We-Tube"),
            React.createElement(Video, {
                title: "The Best Video On Youtube",
                dateAdded: "4 days ago",
                channel: "News Channel"
            }),
            React.createElement(Video, {
                title: "Seconed Video On Youtube",
                dateAdded: "4 days ago",
                channel: "Local Channel"
            }),
            React.createElement(Video, {
                title: " Third Video On Youtube",
                dateAdded: "4 days ago",
                channel: "Learning Channel"
            }),
            React.createElement(Video)
        ]);


    }
    // first what will render, second where will render
ReactDOM.render(React.createElement(App), document.getElementById("root"))