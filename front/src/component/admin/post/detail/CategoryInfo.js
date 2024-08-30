import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function CategoryInfo(props) {
  const cvo = props.cvo;
    return (
      <TableContainer className="infoPart" component={Paper}>
        <Table className="detailInfoTable">
          <TableBody>
            <TableRow>
              <TableCell className="th">대분류</TableCell>
              <TableCell className="td" style={{height: 50}}>{cvo.upcategoryname}</TableCell>
              <TableCell className="th">소분류</TableCell>
              <TableCell className="td" style={{height: 50}}>{cvo.categoryname}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  