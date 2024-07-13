import "@cloudscape-design/global-styles/index.css"
import AppBar from "../components/AppBar/AppBar.jsx";
import FilesAppLayout from "../components/FilesAppLayout/FilesAppLayout.jsx";

import {defaultBreadcrumbs} from "../components/breadcrumbs-items";
import TableListFiles from "../components/TableListFiles/TableListFiles.jsx";
import UploadFileCard from "../components/UploadFileCard/UploadFileCard.jsx";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default function Main(props) {

    return (
        <>
            <AppBar/>
            <FilesAppLayout
               
                breadcrumbs={defaultBreadcrumbs}
                title={props.level == 'private' ? "My private files" : "All public files"}
            
            >
                <SpaceBetween size="2">
                    {/* <br /> */}
                    <UploadFileCard level={props.level}/>
                    <br />
                    <TableListFiles level={props.level}/>
                </SpaceBetween>
            </FilesAppLayout>

        </>
    );
}