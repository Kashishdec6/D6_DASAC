import React from 'react'; 
import { Drawer, Divider, IconButton } 
	from '@material-ui/core'; 
import { List, ListItem, ListItemIcon, ListItemText } 
	from '@material-ui/core'; 
import ReorderIcon from '@material-ui/icons/Reorder'; 
import AccountCircleIcon from 
	'@material-ui/icons/AccountCircle'; 
import { Link } from 'react-router-dom'; 

const styles = { 
sideNav: { 
	marginTop: '40px', 
	zIndex: 3, 
/*	marginLeft: '0px', 
	position: 'fixed',  */
	display: 'flex',
	justifyContent: 'flex-end',
	color: 'red'
}, 
link: { 
	color: 'black', 
	textDecoration: 'none', 
} 
}; 

export default class D6_SL_Drawer
	extends React.Component { 
constructor(props) { 
	super(props); 
	this.state = { 
	isDrawerOpened: false, 
	}; 
} 
toggleDrawerStatus = () => { 
	this.setState({ 
	isDrawerOpened: true, 
	}) 
} 
closeDrawer = () => { 
	this.setState({ 
	isDrawerOpened: false, 
	}) 
} 
render() { 
	const { isDrawerOpened } = this.state; 
	return ( 
	<div> 
		<div style={styles.sideNav}> 
			<IconButton color="red" onClick={this.toggleDrawerStatus}> 
			{!isDrawerOpened ? <ReorderIcon /> : null } 
			</IconButton> 
		</div> 
		<Divider/> 
		<Drawer 
/*		variant="temporary"  */
		variant="persistent"
		open={isDrawerOpened} 
		onClose={this.closeDrawer} 
		> 
		<div style={styles.link}>
			<h3>About</h3>
			<h3>Home</h3>
		</div>
	{/*	<Link to='/about' style={styles.link}> 
			<List> 
			<ListItem button key='About Us'> 
				<ListItemIcon><AccountCircleIcon/> 
				</ListItemIcon> 
				<ListItemText primary='About Us' /> 
			</ListItem> 
			</List> 
		</Link> 
		<Link to='/contact' style={styles.link}> 
		<List> 
			<ListItem button key='Contact Us'> 
			<ListItemIcon>Contact
			</ListItemIcon> 
			<ListItemText primary='Contact Us' /> 
			</ListItem> 
			</List> 
		</Link>  */}
		</Drawer> 
	</div> 
	); 
} 
} 
