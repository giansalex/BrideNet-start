/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("BridgeJs", function ($asm, globals) {
    "use strict";

    Bridge.define("BridgeJs.App", {
        $main: function () {
            document.head.title = "Bridge Starterd";
            // Create a new Button
            var button = Bridge.merge(document.createElement('button'), {
                id: "btn1",
                innerHTML: "Clickme",
                onclick: $asm.$.BridgeJs.App.f1
            } );
            //jQuery.Get("http://web");
            //btn.Val("Clickeame");
            //btn.Click(ev => Global.Alert("Success!"));
            document.body.appendChild(button);
        }
    });

    Bridge.ns("BridgeJs.App", $asm.$);

    Bridge.apply($asm.$.BridgeJs.App, {
        f1: function (r) {
            Bridge.global.alert("Hello!");
        }
    });
});
