import TableBody from "./TableBody";
import TableHead from "./TableHead";

function UserTable() {
  return (
    <div className="overflow-y-scroll relative  h-screen">
      <table className=" text-center border-separate border-spacing-y-3 table-fixed w-full">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default UserTable;
