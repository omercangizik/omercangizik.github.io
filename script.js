const projects = [
  {
    title: "Excel Satış Dasboard projesi",
    description:
      "Bu satış dashboardu, işletmenin satış performansını analiz etmek amacıyla Microsoft Excel kullanılarak hazırlanmıştır. Dashboard’da aylara göre satış ve kâr, şehir ve ürün bazlı satışlar ile personel performansı görsel olarak sunulmaktadır. Filtreler sayesinde kullanıcılar verileri dinamik şekilde inceleyebilir. Ayrıca toplam ciro, toplam kâr, kâr marjı ve satış adedi gibi temel performans göstergeleri (KPI) dashboard üzerinde özet olarak gösterilmektedir.",
    
    type: "frontend",
    tech: ["Microsoft Excel"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "gorseller/excel_dashboard.png",
    pdfUrl: "",
    code: `<!-- Örnek: Proje kartı HTML yapısı -->
<article class="project-card">
  <h3>Modern Portfolyo Sitesi</h3>
  <p>Kısa açıklama...</p>
</article>`,
    featured: true,
  },

  {
    title: "Uçuş Performansı ve Gecikme Analizi",
    description:
      "Bu dashboard, havayolu uçuş verilerini analiz ederek uçuş performansı ve gecikme durumlarını görselleştirmek amacıyla hazırlanmıştır. Dashboard üzerinde toplam uçuş sayısı, geciken ve iptal edilen uçuşlar, gecikme oranı ve yönlendirilen uçuşlar gibi temel performans göstergeleri sunulmaktadır. Ayrıca aylara göre gecikme trendleri, havalimanı ve havayolu bazlı gecikme analizleri ile gecikme nedenlerinin dağılımı görsel olarak incelenebilmektedir. Kullanıcılar yıl, ay, havayolu şirketi ve havalimanı filtrelerini kullanarak verileri dinamik şekilde analiz edebilmektedir.",
      type: "frontend",
    tech: ["Power BI"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "gorseller/ucus_performans_dashboard.png",
    pdfUrl: "",
    code: `<!-- Örnek: Proje kartı HTML yapısı -->
<article class="project-card">
  <h3>Modern Portfolyo Sitesi</h3>
  <p>Kısa açıklama...</p>
</article>`,
    featured: true,
  },



  {
    title: "Mağaza Satış Analizi Dashboardu",
    description:
    "Bu proje, bir mağazaya ait satış verilerinin analiz edilmesi ve görselleştirilmesi amacıyla oluşturulmuş bir satış analiz dashboardudur. Dashboard üzerinde yıl, ay, eyalet, ürün, kategori, müşteri segmenti ve gönderim modu gibi filtreler kullanılarak satış verileri dinamik olarak incelenebilmektedir. Grafikler sayesinde satış ve kâr trendleri, kategori bazlı satışlar, eyaletlere göre sipariş dağılımı, gönderim türlerine göre sipariş sayıları ve en aktif müşteriler analiz edilebilmektedir. Ayrıca toplam satış tutarı, toplam sipariş sayısı, toplam kâr ve toplam müşteri sayısı gibi temel performans göstergeleri de panel üzerinde özet olarak sunulmaktadır.",
      type: "frontend",
    tech: ["Microsoft Excel"],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "gorseller/magaza_satis_dashboard.png",
    pdfUrl: "",
    code: `<!-- Örnek: Proje kartı HTML yapısı -->
<article class="project-card">
  <h3>Modern Portfolyo Sitesi</h3>
  <p>Kısa açıklama...</p>
</article>`,
    featured: true,
  },

  
  
];




const projectsGrid = document.getElementById("projects-grid");
const yearSpan = document.getElementById("year");
const currentProjectTitle = document.getElementById("current-project-title");
const currentProjectDesc = document.getElementById("current-project-desc");
const projectModal = document.getElementById("project-modal");
const modalProjectTitle = document.getElementById("modal-project-title");
const modalProjectDesc = document.getElementById("modal-project-desc");
const modalProjectLong = document.getElementById("modal-project-long");
const modalProjectTech = document.getElementById("modal-project-tech");
const modalProjectLinks = document.getElementById("modal-project-links");
const modalProjectImageWrapper = document.getElementById("modal-project-image-wrapper");
const modalProjectImage = document.getElementById("modal-project-image");
const modalProjectCodeWrapper = document.getElementById("modal-project-code-wrapper");
const modalProjectCode = document.getElementById("modal-project-code");
const modalProjectPdfWrapper = document.getElementById("modal-project-pdf-wrapper");
const modalProjectPdf = document.getElementById("modal-project-pdf");
const imageLightbox = document.getElementById("image-lightbox");
const imageLightboxImg = document.getElementById("image-lightbox-img");

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  const filtered = projects;

  if (filtered.length === 0) {
    projectsGrid.innerHTML =
      '<p style="color:#9ca3af;font-size:0.9rem;">Bu kategoriye ait proje eklenmemiş.</p>';
    return;
  }

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-project-title", project.title);

    const techBadges = project.tech
      .map((t) => `<span>${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-meta">
        <div class="project-tech">
          ${techBadges}
        </div>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-links">
        ${
          project.liveUrl && project.liveUrl !== "#"
            ? `<a class="project-link" href="${project.liveUrl}" target="_blank">Canlı Demo</a>`
            : ""
        }
        ${
          project.githubUrl && project.githubUrl !== "#"
            ? `<a class="project-link" href="${project.githubUrl}" target="_blank">GitHub</a>`
            : ""
        }
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  attachProjectClickHandlers();
}


function setYear() {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function setCurrentProject() {
  if (!currentProjectTitle || !currentProjectDesc) return;

  const featured =
    projects.filter((p) => p.featured) || projects;

  const index =
    featured.length > 0 ? Math.floor(Math.random() * featured.length) : 0;

  const project = featured[index] || projects[0];

  if (!project) return;

  currentProjectTitle.textContent = project.title;
  currentProjectDesc.textContent = project.description;
}

function openProjectModal(project) {
  if (!projectModal) return;

  if (modalProjectTitle) modalProjectTitle.textContent = project.title;
  if (modalProjectDesc) modalProjectDesc.textContent = project.description;
  if (modalProjectLong) {
    modalProjectLong.textContent =
      project.longDescription ||
      "" ;
  }

  if (modalProjectTech) {
    modalProjectTech.innerHTML = "";
    (project.tech || []).forEach((t) => {
      const span = document.createElement("span");
      span.textContent = t;
      modalProjectTech.appendChild(span);
    });
  }

  if (modalProjectLinks) {
    modalProjectLinks.innerHTML = "";
    if (project.liveUrl && project.liveUrl !== "#") {
      const live = document.createElement("a");
      live.href = project.liveUrl;
      live.target = "_blank";
      live.className = "btn primary";
      live.textContent = "Canlı Demo";
      modalProjectLinks.appendChild(live);
    }

    if (project.githubUrl && project.githubUrl !== "#") {
      const gh = document.createElement("a");
      gh.href = project.githubUrl;
      gh.target = "_blank";
      gh.className = "btn ghost";
      gh.textContent = "GitHub";
      modalProjectLinks.appendChild(gh);
    }
  }

  if (modalProjectImageWrapper && modalProjectImage) {
    const hasImage = project.imageUrl && project.imageUrl.trim() !== "";

    if (hasImage) {
      modalProjectImage.src = project.imageUrl;
      modalProjectImageWrapper.classList.remove("hidden");
    } else {
      modalProjectImageWrapper.classList.add("hidden");
      modalProjectImage.src = "";
    }
  }

  if (modalProjectCodeWrapper && modalProjectCode) {
    if (project.code && project.code.trim() !== "") {
      modalProjectCode.textContent = project.code;
      modalProjectCodeWrapper.classList.remove("hidden");
    } else {
      modalProjectCodeWrapper.classList.add("hidden");
      modalProjectCode.textContent = "";
    }
  }

  if (modalProjectPdfWrapper && modalProjectPdf) {
    if (project.pdfUrl && project.pdfUrl.trim() !== "") {
      modalProjectPdf.src = project.pdfUrl;
      modalProjectPdfWrapper.classList.remove("hidden");
    } else {
      modalProjectPdfWrapper.classList.add("hidden");
      modalProjectPdf.src = "";
    }
  }

  projectModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function openImageLightbox(src) {
  if (!imageLightbox || !imageLightboxImg) return;
  imageLightboxImg.src = src;
  imageLightbox.classList.remove("hidden");
}

function closeImageLightbox() {
  if (!imageLightbox || !imageLightboxImg) return;
  imageLightbox.classList.add("hidden");
  imageLightboxImg.src = "";
}

function attachProjectClickHandlers() {
  if (!projectsGrid) return;

  const cards = projectsGrid.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-project-title");
      const project = projects.find((p) => p.title === title);
      if (project) openProjectModal(project);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
  setCurrentProject();

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      const shouldClose =
        target.dataset.close === "modal" ||
        target.classList.contains("project-modal-backdrop");

      if (shouldClose) {
        closeProjectModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProjectModal();
        closeImageLightbox();
      }
    });
  }

  if (modalProjectImage && imageLightbox) {
    modalProjectImage.style.cursor = "zoom-in";
    modalProjectImage.addEventListener("click", () => {
      if (modalProjectImage.src) {
        openImageLightbox(modalProjectImage.src);
      }
    });

    imageLightbox.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      const shouldClose = target.dataset.close === "image-lightbox";
      if (shouldClose) {
        closeImageLightbox();
      }
    });
  }
});


