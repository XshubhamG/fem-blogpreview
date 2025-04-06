import "./style.css";

const date = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

document.querySelector("#app").innerHTML = `
  <main>
    <section class="card">
      <picture>
        <img src="/images/illustration-article.svg" alt="Blog Post Image" class="banner-img" />
      </picture>
      <article>
        <h1 class="heading">HTML & CSS foundations</h1>
        <p class="subtext">These languages are backbone of every website, defining structure, content and presentation</p>
        <div class="btn-wrapper">
        <button class="btn">Learning</button>
        <p class="date">Published ${date}</p>
        </div>
        <div class="profile">
          <img src="/images/image-avatar.webp" alt="Profile Image" class="profile-img" />
          <h2 class="profile-text">Greg Hopper</h2>
        </div>
      </article>
    </section>
  </main>
`;
