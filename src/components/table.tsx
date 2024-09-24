import * as React from "react";
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
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

function createData(
  drugName: string,
  fillDate: dayjs.Dayjs,
  remainingDuration: number,
  refillDate: dayjs.Dayjs,
  numberOfRefills: number
) {
  return {
    drugName,
    fillDate,
    remainingDuration,
    refillDate,
    numberOfRefills,
  };
}

// SAMPLE ROWS
const rows = [
  createData("Acetaminophen", dayjs("2024-05-14"), 28, dayjs("2024-06-11"), 4),
  createData("Metformin", dayjs("2024-05-15"), 28, dayjs("2024-06-12"), 4),
  createData("Bandaid", dayjs("2024-05-16"), 16, dayjs("2024-06-01"), 6),
  createData("Chicken Noodle Soup", dayjs("2024-05-17"), 3, dayjs("2024-05-20"), 4),
  createData("A Box", dayjs("2024-05-18"), 1, dayjs("2024-05-19"), 3),
];

export const fetchDrugs = async () => {
  try {
    const response = await fetch("http://localhost:5000/drugs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("it kaboomed " + error);
  }
};

export default function BasicTable() {
  // *** Handle text and number inputs ***

  // Drug Name
  const [drugName, setDrugName] = useState("");

  const handleDrugNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDrugName(event.target.value);
  };

  // Fill Date
  const [fillDate, setFillDate] = useState<Dayjs | null>(null);

  const handleFillDateChange = (date: Dayjs | null) => {
    setFillDate(date);
  };

  // Remaining Duration
  const [remainingDuration, setRemainingDuration] = useState(0);

  const handleRemainingDurationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRemainingDuration(parseInt(event.target.value, 10));
  };

  const [numberOfRefills, setNumberOfRefills] = useState(0);

  const handleNumberOfRefills = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfRefills(parseInt(event.target.value, 10));
  };

  const newDrug = async () => {
    console.log("new drug successful");
    try {
      if (!drugName || !fillDate || !remainingDuration || !numberOfRefills) {
        console.error("missing fields");
        return;
      }
      const response = await fetch("http://localhost:5000/drugs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          drugName: drugName,
          fillDate: fillDate.toISOString(),
          remainingDuration: remainingDuration,
          refillDate: fillDate.toISOString() + remainingDuration * 86400000,
          numberOfRefills: numberOfRefills,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("it kaboomed " + error);
    }
  };
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
              {/* TOP ROW OF TABLE
								- Labels for columns*/}

              <TableCell
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                  fontSize: "1.2rem",
                }}
              >
                Drug Name
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
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                  fontSize: "1.2rem",
                }}
              >
                Number of Refills
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
              {/* ADD DRUG ROW
								- Input fields for adding a new drug*/}

              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                }}
              >
                <TextField
                  id="drug-name"
                  label="+ Drug Name..."
                  variant="outlined"
                  sx={{
                    width: "30vw",
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
                  value={drugName}
                  onChange={handleDrugNameChange}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                      "& .MuiInputAdornment-root .MuiSvgIcon-root": {
                        color: "#ccd5db",
                      },
                    }}
                    value={fillDate}
                    onChange={handleFillDateChange}
                  />
                </LocalizationProvider>
              </TableCell>
              <TableCell
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                }}
              >
                <TextField
                  id="duration"
                  label="+ Duration..."
                  type="number"
                  variant="outlined"
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
                  }}
                  value={remainingDuration}
                  onChange={handleRemainingDurationChange}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                }}
              >
                <TextField
                  id="refills"
                  label="+ Refills..."
                  type="number"
                  variant="outlined"
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
                  }}
                  value={numberOfRefills}
                  onChange={handleNumberOfRefills}
                />
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#ccd5db",
                  borderBottom: "5px solid #242424",
                  fontSize: "1.2rem",
                }}
              >
                <Button sx={{ color: "#ccd5db" }} onClick={newDrug}>
                  Add Drug
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.drugName}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                {/* DRUG ROW
									- Display list of drugs and drug information*/}

                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "#ccd5db",
                    borderBottom: "5px solid #242424",
                  }}
                >
                  {row.drugName}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#ccd5db",
                    borderBottom: "5px solid #242424",
                  }}
                >
                  {row.fillDate.format("YYYY-MM-DD")}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#ccd5db",
                    borderBottom: "5px solid #242424",
                  }}
                >
                  {row.remainingDuration}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#ccd5db",
                    borderBottom: "5px solid #242424",
                  }}
                >
                  {row.refillDate.format("YYYY-MM-DD")}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#ccd5db",
                    borderBottom: "5px solid #242424",
                  }}
                >
                  {row.numberOfRefills}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#ccd5db",
                    borderBottom: "5px solid #242424",
                    fontSize: "1.2rem",
                  }}
                >
                  <Button sx={{ color: "#ccd5db" }}>Refill</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
