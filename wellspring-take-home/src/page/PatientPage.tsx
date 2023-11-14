import { Chip } from "@mui/material";
import React, { useState, useEffect } from "react";

// Types
import { Patient } from "../types/Patient";

// Utils
import { getChipColor } from "../shared/utils/ChipColor";

// Services
import { fetchPatients } from "../shared/services/PatientService";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Paper,
} from "@mui/material";

function PatientPage() {
  const [patients, setPatients] = useState<Array<Patient>>([]);
  useEffect(() => {
    fetchPatients().then((patients) => setPatients(patients));
  }, []);
  const [selected, setSelected] = useState<number[]>([]);
  const [orderBy, setOrderBy] = useState<keyof Patient>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = patients.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleRequestSort = (property: keyof Patient) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const headerCells = [
    { id: "id", label: "ID" },
    { id: "patientName", label: "Patient Name" },
    { id: "caregiverName", label: "Caregiver Name" },
    { id: "visitStatus", label: "Visit Status" },
    { id: "lastCheckIn", label: "Last Check In" },
  ];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < patients.length
                }
                checked={selected.length === patients.length}
                onChange={handleSelectAllClick}
                inputProps={{ "aria-label": "select all patients" }}
              />
            </TableCell>
            {headerCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <span
                  onClick={() =>
                    handleRequestSort(headCell.id as keyof Patient)
                  }
                >
                  {headCell.label}
                </span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {patients
            .sort((a, b) => {
              const orderValue = order === "desc" ? -1 : 1;
              return a[orderBy] < b[orderBy] ? -orderValue : orderValue;
            })
            .map((row) => {
              const isItemSelected = isSelected(row.id);

              return (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => handleClick(row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.patientName}</TableCell>
                  <TableCell>{row.caregiverName}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={row.visitStatus}
                      color={getChipColor(row.visitStatus)}
                    />
                  </TableCell>
                  <TableCell>{row.lastCheckIn as string}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default PatientPage;
