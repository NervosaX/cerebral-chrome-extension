var DOM = React.DOM;

var debuggerStyle = {
  fontFamily: 'Consolas, Verdana',
  fontSize: '14px',
  fontWeight: 'normal',
  minHeight: '100%',
  backgroundColor: '#FFF',
  color: '#666',
  overflowY: 'auto',
  overflowX: 'hidden',
  boxSizing: 'border-box'
};

var DebuggerComponent = React.createClass({
  getValue: function (path) {
    // Grab state with path
    return this.props.state;
  },
  render: function () {

      var currentSignalIndex = this.props.currentSignalIndex;
      var signals = this.props.signals || [];
      var signal = signals[currentSignalIndex];

      return DOM.div({
          style: debuggerStyle
        },
        React.createElement(ToolbarComponent, {
          willStoreState: this.props.willStoreState,
          willKeepState: this.props.willKeepState,
          currentSignalIndex: currentSignalIndex,
          totalSignals: signals.length,
          toggleStoreState: this.toggleStoreState,
          toggleKeepState: this.toggleKeepState,
          reset: this.reset,
          isExecutingAsync: this.props.isExecutingAsync,
          //recorder: this.state.recorder,
          isRemembering: this.props.isRemembering
        }),
        React.createElement(SliderComponent, {
          isExecutingAsync: this.props.isExecutingAsync,
          willKeepState: this.props.willKeepState,
          value: currentSignalIndex + 1,
          steps: signals.length,
          //recorder: this.state.recorder,
          isRemembering: this.props.isRemembering
        }),
        signal ? React.createElement(SignalComponent, {
          signal: signal,
          getValue: this.getValue,
          isExecutingAsync: this.props.isExecutingAsync
        }) : null
      );
  }
});