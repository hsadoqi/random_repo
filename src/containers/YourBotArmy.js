import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = () => {
    return this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} handleBot={this.props.handleBot} />
    ));
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{this.renderBots()}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
