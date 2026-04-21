# Core20 Link Cleanup Report (TKT-D4)

- Date: 2026-04-21
- Scope: 문서/정적 페이지 및 공통 UI 내부 링크에서 non-core 경로 제거 여부 확인

## 점검 대상
- `app/**/*.tsx`
- `components/**/*.tsx`

## 점검 방식
- 내부 경로 패턴(`href/url/canonical`) 정적 스캔
- 허용 경로:
  - Core20 calculator routes
  - 정적 페이지(`/about`, `/privacy`, `/terms`, `/contact`, `/accessibility`, `/calculators`, `/category/*`, `/sandbox-seo`)
- 정적 에셋(`/og-main.png` 등)은 검사 제외

## 결과
- Non-core 내부 링크: **0건**
- 깨진 내부 링크(정적 경로 기준): **0건**

## 결론
TKT-D4 기준(문서/정적 페이지 링크 정리) 충족.
현재 코드베이스의 내부 탐색 경로는 Core20 + 정적 필수 경로로 수렴됨.
