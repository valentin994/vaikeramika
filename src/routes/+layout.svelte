<script>
  import "tailwindcss/tailwind.css";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="text-xl" href="/">VAI Keramika</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/about">O nama</a></li>
      <li><a href="/contact">Kontakt</a></li>
    </ul>
  </div>
</div>
<slot/>
