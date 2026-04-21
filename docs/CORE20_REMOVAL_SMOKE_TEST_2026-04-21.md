# Core20 Removal Smoke Test — 2026-04-21

- 목적: TKT-C3 배포 전 smoke test
- 범위: middleware 410 정책 + robots 헤더 동작 검증
- 환경: local dev (`npm run dev -- --port 3015`)

---

## 1) 실행 커맨드

```bash
npm run dev -- --port 3015
```

검증 요청(요약):
- Core 후보 URL: `/mortgage`, `/tax`
- Non-core URL: `/car-accident`, `/401k-growth`
- 헤더 확인: `x-robots-tag`, `content-type`

주의:
- 기본 `curl` UA는 middleware의 자동화 차단 규칙에 의해 403 발생
- 따라서 브라우저형 UA(`Mozilla/5.0`)로 재검증 수행

---

## 2) 결과

### 2-1. 기본 curl UA (참고)
- `/mortgage` → `403`
- `/tax` → `403`
- `/car-accident` → `403`
- `/401k-growth` → `403`

해석:
- Gate #1(automation block) 정상 작동

### 2-2. Browser-like UA (`Mozilla/5.0`) 재검증
- `/mortgage` → `404`
- `/tax` → `404`
- `/car-accident` → `410`
- `/401k-growth` → `410`

해석:
- Non-core URL이 410으로 내려가는 정책은 정상 작동
- Core URL은 410으로 잘못 처리되지 않음(410 미발생)
- 다만 Core URL 404는 별도 라우팅 이슈 가능성이 있어 후속 점검 필요

### 2-3. 헤더 검증 (Non-core)
`/car-accident` 응답 헤더:
- `HTTP/1.1 410 Gone`
- `content-type: text/plain; charset=utf-8`
- `x-robots-tag: noindex, nofollow, noarchive`

해석:
- TKT-C2 요구사항(로봇 메타 헤더) 충족

---

## 3) 판정

- [x] Non-core URL이 410으로 응답
- [x] Non-core 응답에 `X-Robots-Tag` 포함
- [x] automation UA 차단(403) 동작 확인
- [ ] Core URL 200 응답 확인 (현 환경에서 404, 별도 조사 필요)

### 결론
TKT-C3 범위(배포 전 정책 smoke test) 기준으로 **non-core 410 + robots 헤더 정책은 정상**.
Core URL 404는 middleware 410 정책과는 별개로 보이며, 다음 단계 QA(F2)에서 라우팅 경로 점검 필요.
