import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const botAPI = `https://bot-battler-api.herokuapp.com/api/v1/bots`;

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super();
    this.state = {
      bots: [],
      botArmy: [],
      showDetails: false,
      chosenBot: "",
      filteredBots: []
    };
  }

  componentDidMount() {
    fetch(botAPI)
      .then(res => res.json())
      .then(bots => {
        this.setState({ bots });
      });
  }

  showDetails = (e, bot) => {
    e.preventDefault();
    this.setState({
      chosenBot: bot,
      showDetails: true
    });
  };

  enlistBot = (e, bot) => {
    e.preventDefault();
    if (!this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy, bot],
        showDetails: false
      });
    }
  };

  removeBot = (e, bot) => {
    e.preventDefault();
    let botArmy = this.state.botArmy.filter(armyBot => armyBot !== bot);
    this.setState({ botArmy });
  };

  showAllBots = e => {
    e.preventDefault();
    this.setState({
      showDetails: false
    });
  };

  handleChange = e => {};

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} handleBot={this.removeBot} />
        {this.state.showDetails ? (
          <BotSpecs
            bot={this.state.chosenBot}
            showAllBots={this.showAllBots}
            handleBot={this.enlistBot}
          />
        ) : (
          <BotCollection bots={this.state.bots} handleBot={this.showDetails} />
        )}
      </div>
    );
  }
}

export default BotsPage;
