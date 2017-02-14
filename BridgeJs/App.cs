using System;
using Bridge;
using Bridge.Bootstrap3;
using Bridge.Html5;
using Bridge.jQuery2;

namespace BridgeJs
{
    public class App
    {
        public static void Main()
        {
            Document.Head.Title = "Bridge Starterd";
            // Create a new Button
            var button = new HTMLButtonElement
            {
                Id = "btn1",
                InnerHTML = "Clickme",
                OnClick = r => Global.Alert("Hello!")
            };
            //jQuery.Get("http://web");
            //btn.Val("Clickeame");
            //btn.Click(ev => Global.Alert("Success!"));
            Document.Body.AppendChild(button);
        }
    }
}