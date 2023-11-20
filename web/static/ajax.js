let dataTable;
let DataTableInit=false;

const dataTableModel = {
    columnDefs: [
        { className:'centered', targets: [0, 1, 2, 3, 4, 5, 6] },
        { orderable: false, targets: [5, 6] },
        { searchable: false,targets: [0, 5, 6] }
    ],
    pageLength: 4,
    destroy: true

};

const initDataTable = async () => {
    if (DataTableInit) {
        dataTable.destroy();
    }
        
    await listTaller();

    initData = $('#datatable-taller').DataTable(dataTableModel);

    DataTableInit = true;
};
const listTaller=async()=> {
    try {
        const response=await fetch('http://127.0.0.1:8000/list_taller/');
        const data=await response.json();

        let content= ``;
        data.taller.forEach((taller, index) => {
            content+= `
            <tr>
                <td>${index+1}</td>
                <td>${taller.id}</td>
                <td>${taller.chasis}</td>
                <td>${taller.propietario}</td>
                <td>${taller.estado_vehiculo}</td>
                <td>${taller.estado_vehiculo >= 5 
                    ? "<i class='fa-solid fa-check' style='color: green;'></i>"
                    : "<i class='fa-solid fa-xmark' style='color: red;'></i>"}</td>
                <td>
                    <button class='btn btn-sm btn-primary'><i class='fa-solid fa-pencil'></i></button>
                    <button class='btn btn-sm btn-danger'><i class='fa-solid fa-trash-can'></i></button>
                </td>
            </tr>
            `;
        });
        tableBody_taller.innerHTML = content;
    }catch (ex) {
        alert(ex);
    }
};

window.addEventListener('load', async()=> {
    await initDataTable();
});

