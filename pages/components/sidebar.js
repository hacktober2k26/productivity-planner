async function loadSidebar() {

    const sidebar = document.getElementById("sidebar-container");

    if (!sidebar) return;

    try {

        const response = await fetch("./components/sidebar.html");

        const html = await response.text();

        sidebar.innerHTML = html;

    }

    catch(error){

        console.error("Sidebar failed to load:", error);

    }

}

loadSidebar();