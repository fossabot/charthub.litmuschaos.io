import * as React from "react";
import Popover, { ArrowContainer } from "react-tiny-popover";
import { FaCopy } from "react-icons/fa";

export class InstallModalContent extends React.Component {
  constructor(props) {
    super();
    this.state = { value: "", copied: false };
  }

  copyToClipboard = e => {
    var textField = document.createElement("textarea");
    textField.innerText = this.command();
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    e.target.focus();
    // sechedules a call to setState to hide the popover in 5 seconds
    setTimeout(
      function() {
        this.setState({ copied: false });
      }.bind(this),
      5000
    );
    this.setState({ copied: true });
  };

  command() {
    return `kubectl create -f ${this.props.expcrdurl}`;
  }

  render() {
    return (
      <div className="install-modal-content">
        <div className="modal-header">
          <div className="modal-img-placeholder"> <img src={this.props.logo} /></div>
          <div className="modal-header-title-container">
            <h1 className="modal-title">{this.props.displayName}</h1>
            <span className="modal-subtitle">Contributed by {this.props.provider}</span>
          </div>
        </div>

        <h3 className="install-title">Install the Chaos Experiments</h3>

        <div className="modal-install-instruction">
          <span className="modal-install-instruction-number"></span>You can
          install the Chaos Experiments by following command
        </div>
        <div className="modal-install-code-row">
          <div className="modal-code">{this.command()}
          {document.queryCommandSupported("copy") && (
            <Popover
              // Allows the popover to show over the modal
              containerStyle={{ zIndex: 1000 }}
              isOpen={this.state.copied}
              position={"bottom"}
              content={({ position, targetRect, popoverRect }) => (
                <ArrowContainer
                  position={position}
                  targetRect={targetRect}
                  popoverRect={popoverRect}
                  arrowColor="#b0b0b0"
                  arrowSize={3}
                  arrowStyle={{ opacity: 0.7 }}
                >
                  <div className="modal-install-popover-content">Copied</div>
                </ArrowContainer>
              )}
            >
              <button
                onClick={this.copyToClipboard}
                className="modal-install-clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
              </button>
            </Popover>
          )}</div>
        </div>
        <div className="modal-install-instruction">
          <span className="modal-install-instruction-number gray-text-color">
            Notes:
          </span>
        </div>

        <div className="modal-install-instruction">
          <span className="modal-install-instruction-number"></span>
          <a href="https://github.com/litmuschaos/chaos-operator/blob/master/README.md">
            Install Litmus Operator
          </a>
          a tool for for injecting chaos experiments on Kubernetes
        </div>
        {/* <div>       <a href="https://github.com/litmuschaos/chaos-operator/blob/master/README.md"> https://github.com/litmuschaos/chaos-operator/blob/master/README.md </a></div> */}
      </div>
    );
  }
}
