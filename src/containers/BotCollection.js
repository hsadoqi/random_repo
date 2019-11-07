import React from "react";
import BotCard from "../components/BotCard";
import BotFilter from "../components/BotFilter";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
    return this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} handleBot={this.props.handleBot} />
    ));
  };

  render() {
    return (
      <div className="ui four column grid">
        <BotFilter handleChange={this.props.handleChange} />
        <div className="row">{this.renderBots()}</div>
      </div>
    );
  }
}

export default BotCollection;
