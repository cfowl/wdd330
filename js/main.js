const links = [
    {
        label: 'Week 01 Code & Notes',
        url: 'week1/' //index.html is automatic
    },
    {
        label: 'Week 02 Code',
        url: 'week2/'
    },
    {
        label: 'Week 03 Code & Notes',
        url: 'week3/'
    },
    {
        label: 'Week 04 Code & Notes',
        url: 'week4/'
    },
    {
        label: 'Week 05 Code & Notes',
        url: 'week5/'
    },
    {
        label: 'Week 06 Todo App',
        url: 'week6/'
    },
    {
        label: 'Week 07 Code & Notes',
        url: 'week7/'
    },
    {
        label: 'Week 08 Code & Notes',
        url: 'week8/'
    },
    {
        label: 'Week 09 Code & Notes',
        url: 'week9/'
    },
    {
        label: 'Week 10 Code & Notes',
        url: 'week10/'
    },
    {
        label: 'Final Project: NASA API',
        url: 'NASAAPI/'
    }
];

let list = document.getElementById('toc');

links.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', link.url);
    a.textContent = link.label;
    li.appendChild(a);
    list.appendChild(li);
});