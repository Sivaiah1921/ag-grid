import React, { useState } from "react";
import "ag-grid-enterprise";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Button from "./components/Button";
import CustomInput from "./components/CustomInput";
import CustomDropdown from "./components/CustomDropdown";

const Table = () => {
	// const [gridApi, setGridApi] = useState(null);
	// const [gridColumnApi, setGridColumnApi] = useState(null);
	const submitedData = [];
	const [onSelectionData, setOnSelectionData] = useState([]);
	const [data, newData] = useState([]);
	const [rowData, setRowData] = useState([
		{
			Id: 1,
			Name: "shnakar",
			Email: "dsfd@hghj.com",
			Gender: "Male",
			DOB: "12/02/1995",
			Country: "India",
			City: "Hyd",
		},
	]);

	const handleSubmitedData = () => {
		const result = submitedData.concat(rowData);
		newData(result);
	};
	console.log(data);
	const addNewData = () => {
		setRowData((pre) => [
			...pre,
			{ Id: pre.length + 1, Name: "", Email: "", Gender: "", DOB: "" },
		]);
	};
	const actionButton = (params) => {
		console.log(params.data.Id);
		const newData = rowData.filter((data) => data.Id !== params.data.Id);
		setRowData(newData);
	};
	const onSelectionChanged = (event) => {
		setOnSelectionData(event.api.getSelectedRows());
	};

	const deleteSelectedFn = () => {
		// const results = rowData.filter((value1) =>
		// 	onSelectionData.some((value2) => value1.Id !== value2.Id)
		// );
		const results = rowData.filter(
			(o) => !onSelectionData.find((o2) => o.Id === o2.Id)
		);
		setRowData(results);
	};
	const deleteNotSelectedFn = () => {
		const results = rowData.filter(
			(value1) => !onSelectionData.every((value2) => value1.Id !== value2.Id)
		);
		setRowData(results);
	};

	const defaultColDef = {
		// set every column width
		width: 100,
		flex: 1,
		// make every column editable
		editable: true,
		// make every column use 'text' filter by default
		filter: "agTextColumnFilter",
	};

	return (
		<div>
			<div className='custombuttons'>
				<Button onClick={addNewData}>Add Row</Button>
				<Button onClick={deleteSelectedFn}>Delete Selected Rows</Button>
				<Button onClick={deleteNotSelectedFn}> Delete Non Selected Rows</Button>
				<Button onClick={handleSubmitedData}> Submit</Button>
			</div>
			<div className='ag-theme-alpine table'>
				<AgGridReact
					defaultColDef={defaultColDef}
					rowSelection={"multiple"}
					onSelectionChanged={onSelectionChanged}
					rowData={rowData}

					// onCellClicked={true}
				>
					<AgGridColumn
						field='Id'
						sortable={true}
						editable={true}
						filter={true}
						onCellDoubleClicked={true}
						checkboxSelection={true}
						onCellValueChanged={true}
						onCellClicked={(e) => console.log(e.value)}
					></AgGridColumn>

					<AgGridColumn
						field='Name'
						sortable={true}
						editable={true}
						onCellDoubleClicked={true}
						filter={true}
						cellRendererFramework={(params) => (
							<input
								className='input'
								type='text'
								value={params.value}
								placeholder='Name'
								defaultValue
							/>
						)}
						onCellValueChanged={true}
						// cellStyle={
						// 	(params) => {
						// 		return params.value.length > 2
						// 			? { background: "" }
						// 			: { background: "yellow" };
						// 	}
						// 	// console.log(params.value.length > 2, "cellStyle");
						// }
						// onCellClicked={(params) => console.log(params)}
					></AgGridColumn>
					<AgGridColumn
						field='Email'
						sortable={true}
						filter={true}
						editable={true}
						cellRendererFramework={(params) => (
							<input
								className='input'
								type='text'
								value={params.value}
								placeholder='Email'
								defaultValue
							/>
						)}
					></AgGridColumn>
					<AgGridColumn
						field='Gender'
						sortable={true}
						filter={true}
						editable={true}
						cellRendererFramework={(params) => (
							<select className='input' id='dropdown' defaultValue={params.value}>
								<option value={params.value}>Male</option>
								<option value={params.value}>Female</option>
							</select>
						)}
					></AgGridColumn>
					<AgGridColumn
						field='DOB'
						sortable={true}
						filter={true}
						editable={true}
						cellEditor={(params) => (
							<input className='input' type='date' placeholder={params.value} />
						)}
					></AgGridColumn>
					<AgGridColumn
						field='Country'
						sortable={true}
						filter={true}
						editable={true}
						cellRendererFramework={(params) => (
							<select className='input' id='dropdown' defaultValue={params.value}>
								<option value={params.value}>India</option>
								<option value={params.value}>Aus</option>
							</select>
						)}
					></AgGridColumn>
					<AgGridColumn
						field='City'
						sortable={true}
						filter={true}
						editable={true}
					></AgGridColumn>
					<AgGridColumn
						field=''
						headerName=''
						cellRendererFramework={(params) => (
							<div onClick={() => actionButton(params)}>
								<svg
									viewBox='64 64 896 896'
									focusable='false'
									className=''
									data-icon='delete'
									width='1em'
									height='1em'
									fill='currentColor'
									aria-hidden='true'
								>
									<path d='M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'></path>
								</svg>
							</div>
						)}
					></AgGridColumn>
				</AgGridReact>
			</div>
			<div className='submiteddata'>submitedData</div>
			<div className='ag-theme-alpine table'>
				<AgGridReact defaultColDef={defaultColDef} rowData={data}>
					<AgGridColumn field='Id'></AgGridColumn>
					<AgGridColumn field='Name'></AgGridColumn>
					<AgGridColumn field='Email'></AgGridColumn>
					<AgGridColumn field='Gender'></AgGridColumn>
					<AgGridColumn field='DOB'></AgGridColumn>
					<AgGridColumn field='Country'></AgGridColumn>
					<AgGridColumn field='City'></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
};

export default Table;
