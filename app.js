const dtbody = document.querySelector(`.developerdata table tbody`);

devs.map(data => {
    dtbody.innerHTML += `
    <tr>
    <td>${ data.id }</td>
    <td>${ data.name }</td>
    <td>${ data.age }</td>
    <td>${ data.gender }</td>
    <td>${ data.location }</td>
    <td>${ data.skill }</td>
    <td>${ data.income }$</td>
    <td><img style="width: 50px; height: 50px; border-radius: 50%;" src="${ data.image }"></td>
</tr>
    `;
});


const stbody = document.querySelector(`.studentdata table tbody`);

students.map(data => {
    stbody.innerHTML += `
    <tr>
    <td>${ data.roll }</td>
    <td>${ data.name }</td>
    <td>${ data.age }</td>
    <td>${ data.gender }</td>
    <td>${ data.location }</td>
    <td>${ data.bn }</td>
    <td>${ data.en }</td>
    <td>${ data.math }</td>
    <td>${ data.s }</td>
    <td>${ data.ss }</td>
    <td>${ data.rel }</td>
    <td><img style="width: 40px; height: 40px; border-radius: 50%;" src="${ data.image }"></td>
</tr>
    `;
});

const ptbody = document.querySelector(`.phonebookdata table tbody`);

phoneBooks.map(data => {
    ptbody.innerHTML += `
    <tr>
    <td>${ data.name }</td>
    <td>${ data.mobile }</td>
    <td>${ data.relation }</td>
    <td>${ data.location }</td>
    <td><img style="width: 40px; height: 40px; border-radius: 50%;" src="${ data.image }"></td>
</tr>
    `;
});