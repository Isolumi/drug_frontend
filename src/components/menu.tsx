import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;
const users = ["you", "me", "that guy over there"];

export default function ClippedDrawer() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor : "#236db8"}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						drug hooray wahoo
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
						backgroundColor: "#363c40",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" , backgroundColor: '#363c40' }}>
					<Typography variant="h6" component="div" sx={{ p: 2, color: "#ccd5db" }}>
						Users
					</Typography>
					<Divider />
					<List>
						{users.map((text) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<AccountCircle sx={{color: "#ccd5db"}}/>
									</ListItemIcon>
									<ListItemText primary={text} sx={{ color: "#ccd5db"}} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</Box>
	);
}
