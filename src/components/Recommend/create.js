import CsvCreator from "react-csv-creator";

const headers = [
  {
    id: "first",
    display: "First column",
  },
  {
    id: "second",
    display: "Second column",
  },
];

const rows = [
  {
    first: "foo",
    second: "bar",
  },
  {
    first: "foobar",
    second: "foobar",
  },
];

<CsvCreator filename="my_cool_csv" headers={headers} rows={rows}>
  <p>Download CSV</p>
</CsvCreator>;
