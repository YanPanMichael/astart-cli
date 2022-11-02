<template>
  <div class="concat">
    <p>
      <span>Email</span>
      <div>972702793@qq.com</div>
      <!-- <img src="../utils/cat.png" alt="wx" title="wx" /> -->
    </p>
    <p>
      <span>Wechat</span>
      <div>972702793</div>
      <!-- <img src="../utils/dog.png" alt="qq" title="qq" /> -->
    </p>
    <p>
      <span>QQ</span>
      <div>972702793</div>
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.concat {
  display: flex;
  align-items: center;
}
.concat p {
  padding: 10px;
  margin: 20px;
  text-align: center;
  border-radius: 8px;
}
.concat p span {
  display: block;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
}
.light .concat p {
  background-color: var(--vp-custom-block-info-bg);
}
.dark .concat p {
  background-color: var(--vp-custom-block-info-bg);
}
.concat img {
  width: 140px;
  height: 140px;
  border-radius: 8px;
}
</style>
