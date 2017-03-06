import React from 'react'
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import messages from 'lib/text'

export default ({ onSelectAll }) => (
  <Subheader>
    <div className="row row--no-gutter middle-xs">
      <div className="col-xs-1 col--no-gutter">
        <Checkbox onCheck={(event, isInputChecked) => { onSelectAll(isInputChecked); }} />
      </div>
      <div className="col-xs-5 col--no-gutter">
        {messages.customers_name}
      </div>
      <div className="col-xs-3 col--no-gutter">
        {messages.customers_location}
      </div>
      <div className="col-xs-1 col--no-gutter">
        {messages.customers_orders}
      </div>
      <div className="col-xs-2 col--no-gutter" style={{ textAlign:'right', paddingRight: 16 }}>
        {messages.customers_totalSpent}
      </div>
    </div>
  </Subheader>
)
