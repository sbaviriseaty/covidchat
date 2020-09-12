import React, { Component } from 'react';
import { render } from '@testing-library/react';
class KommunicateChat extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"41117fb23eef7a7bbe0e3eb81c7f168f","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    render() {
        return (
            <div></div>
        )
    }
}
export default KommunicateChat;