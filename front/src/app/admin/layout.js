import { Inter } from "next/font/google";
import "/public/css/admin/ref1.css";
import "/public/css/admin/ref2.css";
import "/public/css/admin/ref3.css";
import "/public/css/admin/ref4.css";
import "/public/css/admin/ref5.css";
import "/public/css/admin/ref6.css";
import Sidebar from "@/component/admin/layout/Sidebar";


export const metadata = {
  title: "Admin - Create Next App",
  description: "Admin section of the app",
};

export default function AdminLayout({ children }) {
  return (
<>
<div id="wrap" className=" beta">
  <hr className="layout" />
  <div id="container">
    <Sidebar/>
    <hr className="layout" />
        <div id="content">
        {children}
    </div>
  </div>
</div>
</>
  );
}