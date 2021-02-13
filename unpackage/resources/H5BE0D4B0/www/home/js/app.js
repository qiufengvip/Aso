window.App = function (OldApp) {
    var App = {
        noConflict: noConflict
    };
    return App;

    function noConflict() {
        if (window.App === App) {
            window.App = OldApp;
        }
        return App;
    }
}(window.App);
