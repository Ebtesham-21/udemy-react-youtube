import Video from "./Video";
const App = () => {
    // "element" {attribute} "content"
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "We-Tube"),
        React.createElement(Video, {
            title: "The Best Video On Youtube",
            dateAdded: "4 days ago",
            channel: "News Channel",
        }),
        React.createElement(Video, {
            title: "Seconed Video On Youtube",
            dateAdded: "4 days ago",
            channel: "Local Channel",
        }),
        React.createElement(Video, {
            title: " Third Video On Youtube",
            dateAdded: "4 days ago",
            channel: "Learning Channel",
        }),
        React.createElement(Video),
    ]);
};
// first what will render, second where will render
ReactDOM.render(React.createElement(App), document.getElementById("root"));