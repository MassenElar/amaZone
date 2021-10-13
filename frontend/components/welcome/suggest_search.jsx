import React from 'react';

export default class SuggestSearch extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  isHidden: false
            }
      }

      toggleIsHidden() {
            this.setState((currentState) => ({
                  isHidden: currentState.isHidden
            }));
      }

      render() {
            return (
                  <div>
                      {!this.state.isHidden && this.props.text} 
                  </div>
            )
      }
}