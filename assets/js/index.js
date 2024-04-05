

$('#add_user').submit(function(event){
    alert("Data Inserted Successfully.")
})

$('#update_user').submit(function(event){
    event.preventDefault();

    let unindexed_array = $(this).serializeArray();
   let data = {}

   $.map(unindexed_array.function(n,i){
    data[n['name']]=n['value']
   });
   console.log(data);

   let request = {
    "url": `http://localhost:8080/api/users/${data.id}`,
    "method" : "PUT",
    "data": data
   }

   $.ajax(request).done(function(response){
    alert("Data Updated Successfully");
   })
})

if(window.location.pathname == '/'){
    $ondelete = $('.table tbody td a.delete');
    $ondelete.click(function(){
        let id = $(this).attr('data-id')

        let request = {
            "url": `http://localhost:8080/api/users/${id}`,
            "method" : "DELETE"
           }

           if(confirm("Do you really want to delete this user?")){
            alert("Data deleted successfully")
            location.reload();
           }
    })
}