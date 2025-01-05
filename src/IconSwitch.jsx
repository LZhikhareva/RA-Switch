import React from 'react';
import ListIcon from '@mui/icons-material/List';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

export default class IconSwitch extends React.Component {
  render() {
    return (
      <div className='selectorIcon'>
        {this.props.icon === 'view_list' ? <ViewModuleIcon sx={{ fontSize: 40, cursor: 'pointer' }} onClick={() => this.props.onSwitch("view_module")} /> : <ListIcon sx={{ fontSize: 40, cursor: 'pointer' }} onClick={() => this.props.onSwitch("view_list")} />}
      </div>
    )

  }
}