import {
  Application,
  Router,
} from "https://deno.land/x/oak@v12.5.0/mod.ts";

// アプリケーションを起動する
async function startApp() {
  const app = new Application();
  const router = new Router();
  // 時刻を返すエンドポイントの登録
  router.get("/time", (ctx) => {
    const now = new Date(); // 現在の時刻を取得
    ctx.response.body = { "time": now.toISOString() }; // JSON形式で現在の時刻を返す
  })
  // ルートを登録
  app.use(router.routes());
  app.use(router.allowedMethods());

  // アプリケーションを起動
  await app.listen({ port: 8001 });
}

// アプリケーションの起動を開始
startApp();

