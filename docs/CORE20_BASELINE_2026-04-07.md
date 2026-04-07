# CORE20 Baseline Snapshot (2026-04-07)

## 목적
- Core 20 집중 운영 전환의 비교 기준선 고정
- 30일 게이트 판정(지속/축소)의 근거 데이터 확보

## 측정 범위
- 기간: 최근 28일
- 범위: Core 20 계산기 경로 우선
- 도구: GA4, GSC, AdSense, Vercel 로그

---

## 1) GA4 기준선 (Core 20)

| 지표 | 값 | 비고 |
| --- | ---: | --- |
| 활성 사용자 (28d) |  |  |
| 참여 세션수 (28d) |  |  |
| 참여율 |  |  |
| 평균 참여시간 |  |  |
| calculator_start 수 |  |  |
| calculator_complete 수 |  |  |
| calculator_complete_rate |  | complete/start |
| 주요 국가 Top5 |  |  |

### 세그먼트
- Human-like traffic:
- Suspected low-quality traffic:

---

## 2) GSC 기준선 (Core 20)

| 지표 | 값 | 비고 |
| --- | ---: | --- |
| 총 노출수 (28d) |  |  |
| 총 클릭수 (28d) |  |  |
| 평균 CTR |  |  |
| 평균 순위 |  |  |

### Core 20 URL별 상위/하위
- 상위 5 URL:
- 개선 필요 5 URL:

---

## 3) AdSense 기준선 (Core 20 랜딩 기준)

| 지표 | 값 | 비고 |
| --- | ---: | --- |
| Page RPM |  |  |
| Impressions |  |  |
| CTR |  |  |
| Estimated earnings |  |  |

---

## 4) 기술/운영 체크
- [ ] middleware noindex + bot gate 배포 확인
- [ ] sitemap Core20 축소 반영 확인
- [ ] robots/sitemap 제출 상태 확인
- [ ] 이벤트 파라미터(route, calculator_id, traffic_quality) 샘플 검증

---

## 5) 실행 커맨드 세트
```bash
# 정적 무결성
npm run audit:search
npm run audit:sitemap
npm run qa:structure

# 코드 품질
npm run lint

# 빌드 검증 (디스크 여유 확보 후)
npm run build
```

---

## 6) 기준선 확정 메모
- 확정일:
- 담당자:
- 스크린샷/CSV 링크:
