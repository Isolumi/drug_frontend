import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
	return (
		<Box>
			<TableContainer
				sx={{
					width: `calc(100% - 240px)`,
					left: 240,
					position: "relative",
					margin: "auto",
					mt: 8,
					ml: 0,
					border: "50px solid #242424",
					backgroundColor: "#363c40",
				}}
			>
				<Table sx={{ maxWidth: `calc(100vw - 240px)` }}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
									fontSize: "1.2rem",
								}}
							>
								dwug omnomnomonmonmonmonmomnn
							</TableCell>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
									fontSize: "1.2rem",
								}}
							>
								Fill Date
							</TableCell>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
									fontSize: "1.2rem",
								}}
							>
								Remaining Duration
							</TableCell>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
									fontSize: "1.2rem",
								}}
							>
								Refill Date
							</TableCell>
							<TableCell
								align="right"
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
									fontSize: "1.2rem",
								}}
							></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								component="th"
								scope="row"
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
								}}
							>
								<TextField
									id="outlined-basic"
									label="+ Drug Name..."
									variant="outlined"
									sx={{
										width: "40vw",
										"& .MuiOutlinedInput-root": {
											"& fieldset": {
												borderColor: "#ccd5db",
											},
											"&:hover fieldset": {
												borderColor: "#ccd5db",
											},
											"&.Mui-focused fieldset": {
												borderColor: "#ccd5db",
											},
										},
										"& .MuiInputLabel-root": {
											color: "#ccd5db",
										},
										"& .MuiInputBase-input": {
											color: "#ccd5db",
										},
									}}
								/>
							</TableCell>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
								}}
							>
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										sx={{
											"& .MuiOutlinedInput-root": {
												"& fieldset": {
													borderColor: "#ccd5db",
												},
												"&:hover fieldset": {
													borderColor: "#ccd5db",
												},
												"&.Mui-focused fieldset": {
													borderColor: "#ccd5db",
												},
											},
											"& .MuiInputLabel-root": {
												color: "#ccd5db",
											},
											"& .MuiInputBase-input": {
												color: "#ccd5db",
											},
											"& .MuiInputAdornment-root .MuiSvgIcon-root":
												{
													color: "#ccd5db",
												},
										}}
									/>
								</LocalizationProvider>
							</TableCell>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
								}}
							>
							</TableCell>
							<TableCell
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
								}}
							>
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										sx={{
											"& .MuiOutlinedInput-root": {
												"& fieldset": {
													borderColor: "#ccd5db",
												},
												"&:hover fieldset": {
													borderColor: "#ccd5db",
												},
												"&.Mui-focused fieldset": {
													borderColor: "#ccd5db",
												},
											},
											"& .MuiInputLabel-root": {
												color: "#ccd5db",
											},
											"& .MuiInputBase-input": {
												color: "#ccd5db",
											},
											"& .MuiInputAdornment-root .MuiSvgIcon-root":
												{
													color: "#ccd5db",
												},
										}}
									/>
								</LocalizationProvider>
							</TableCell>
							<TableCell
								align="right"
								sx={{
									color: "#ccd5db",
									borderBottom: "5px solid #242424",
									fontSize: "1.2rem",
								}}
							>
								<Button sx={{ color: "#ccd5db" }}>
									Add Drug
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell
									component="th"
									scope="row"
									sx={{
										color: "#ccd5db",
										borderBottom: "5px solid #242424",
									}}
								>
									{row.name}
								</TableCell>
								<TableCell
									sx={{
										color: "#ccd5db",
										borderBottom: "5px solid #242424",
									}}
								>
									{row.calories}
								</TableCell>
								<TableCell
									sx={{
										color: "#ccd5db",
										borderBottom: "5px solid #242424",
									}}
								>
									{row.fat}
								</TableCell>
								<TableCell
									sx={{
										color: "#ccd5db",
										borderBottom: "5px solid #242424",
									}}
								>
									{row.carbs}
								</TableCell>
								<TableCell
									align="right"
									sx={{
										color: "#ccd5db",
										borderBottom: "5px solid #242424",
										fontSize: "1.2rem",
									}}
								>
									<Button sx={{ color: "#ccd5db" }}>
										Refill
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
