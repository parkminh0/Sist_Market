import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function TownInfo(props) {
    const tvo = props.tvo;
    var status = "사용";
    if(tvo.status==1){
      status = "미사용";
    }
    return (
      <TableContainer className="infoPart" component={Paper}>
        <Table className="detailInfoTable">
          <TableBody>
            <TableRow>
              <TableCell className="th">도시</TableCell>
              <TableCell className="th">행정구역</TableCell>
              <TableCell className="th">동</TableCell>
            </TableRow>
              <TableRow>
                <TableCell className="td">{tvo.city}</TableCell>
                <TableCell className="td">{tvo.district}</TableCell>
                <TableCell className="td">{tvo.name}</TableCell>
              </TableRow>
            <TableRow>
              <TableCell className="th">위도</TableCell>
              <TableCell className="th">경도</TableCell>
              <TableCell className="th">상태</TableCell>
            </TableRow>
              <TableRow>
                <TableCell className="td">{tvo.latitude}</TableCell>
                <TableCell className="td">{tvo.longitude}</TableCell>
                <TableCell className="td">{status}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  