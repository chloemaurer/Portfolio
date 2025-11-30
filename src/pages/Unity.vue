<template>
    <div id="unity-container" class="unity-desktop">
        <canvas id="unity-canvas" width="960" height="600"></canvas>

        <div id="unity-loading-bar">
            <div id="unity-logo"></div>
            <div id="unity-progress-bar-empty">
                <div id="unity-progress-bar-full"></div>
            </div>
        </div>

        <div id="unity-warning"></div>

        <div id="unity-footer">
            <div id="unity-fullscreen-button"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const canvas = document.querySelector("#unity-canvas");

    function unityShowBanner(msg, type) {
        const warningBanner = document.querySelector("#unity-warning");
        const div = document.createElement("div");
        div.innerHTML = msg;
        warningBanner.appendChild(div);

        if (type === "error") div.style = "background: red; padding: 10px;";
        else if (type === "warning") {
            div.style = "background: yellow; padding: 10px;";
            setTimeout(() => div.remove(), 5000);
        }

        warningBanner.style.display = warningBanner.children.length ? "block" : "none";
    }

    // 👇 IMPORTANT : TON DOSSIER S’APPELLE JeuxUnityTest
    const baseUrl = "/JeuxUnityTest";

    const loaderUrl = `${baseUrl}/Build/JeuxUnityTest.loader.js`;

    const config = {
        dataUrl: `${baseUrl}/Build/JeuxUnityTest.data.br`,
        frameworkUrl: `${baseUrl}/Build/JeuxUnityTest.framework.js.br`,
        codeUrl: `${baseUrl}/Build/JeuxUnityTest.wasm.br`,
        streamingAssetsUrl: `${baseUrl}/StreamingAssets`,
        companyName: "DefaultCompany",
        productName: "My project",
        productVersion: "0.1.0",
        showBanner: unityShowBanner,
    };

    document.querySelector("#unity-loading-bar").style.display = "block";

    const script = document.createElement("script");
    script.src = loaderUrl;

    script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
            document.querySelector("#unity-progress-bar-full").style.width =
                progress * 100 + "%";
        })
            .then((unityInstance) => {
                document.querySelector("#unity-loading-bar").style.display = "none";
                document.querySelector("#unity-fullscreen-button").onclick = () => {
                    unityInstance.SetFullscreen(1);
                };
            })
            .catch((message) => alert(message));
    };

    document.body.appendChild(script);
});
</script>

<style>

</style>
