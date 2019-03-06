var routes = require("./routes.json");

// route('home', ['1'])
export default function() {
    var args = Array.prototype.slice.call(arguments);
    var name= args.shift();

    if (routes[name] === undefined) {
        console.log("Error Route");
    } else {

        /**
         * function(str) {
            if(str[0] == "{") {
                return args.shift();
            } else {
                return str;
            }
        }
         */
        return "/" + routes[name].split("/").map(str => str[0] == "{" ? args.shift() : str).join("/");
    }

}

