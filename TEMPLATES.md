# S-Class Calculator Replication Blueprint (TEMPLATES.md)

이 문서는 `Truck Flagship` 모듈을 기반으로 한 차세대 계산기 양산(Mass Production)을 위한 공식 가이드입니다. 모든 신규 프로젝트는 이 '금형(Mold)'을 따라야 합니다.

---

## 🏗 핵심 아키텍처 (The Trinity Structure)

모든 S-Class 계산기는 다음 5개의 핵심 파일 세트로 구성됩니다.

| 파일명 | 역할 | 유형 | 가변성 |
| :--- | :--- | :--- | :--- |
| `layout.tsx` | **Server Shell**. 전역 헤더/푸터 및 관할권 공지 관리 | Server | 고정 (90%) |
| `page.tsx` | **SEO Entry**. 메타데이터 정의 및 클라이언트 컴포넌트 호출 | Server | 가변 (Metadata) |
| `HubClient.tsx` | **Master Hub**. 주제별 랜딩 페이지 및 인터랙티브 요소 | Client | 가변 (Content) |
| `CalculatorClient.tsx` | **Logic Core**. 실제 계산기 엔진 및 결과 렌더링 | Client | 가변 (Logic) |
| `[Section]/page.tsx` | **Archive**. 통계, 법률 가이드, 안전 규정 등 추가 정보 | Server | 가변 (Data) |

---

## 🎨 양산용 가변 변수 추출 (Replication Variables)

새로운 주제(예: Ozempic, Wrongful Death)를 만들 때 다음 변수만 치환하십시오.

```typescript
// [TOPIC_CONFIG]
const BRAND_NAME = "TruckMaster AI"; // -> "Ozempic Intelligence"
const BRAND_ICON = <Truck />; // -> <Activity /> or <Injection />
const ACCENT_COLOR = "red-500"; // -> "blue-500" or "emerald-500"
const JURISDICTION = "Seoul Central District Court"; // (Global Compliance)
const VERIFIED_BY = "Data Analyst Expert Team";
```

### 💎 The 12th Commandment: S-Class Content Standards
Design is the 'Shell', but Content is the 'Soul'. Every flagship must adhere to these rigorous content standards to maintain its S-Class status.

1.  **Zero Fluff Principle**: No marketing filler. Every sentence must contain a data point, a legal doctrine, or a technical specification.
2.  **Entity Density (LSI)**: Minimum 15+ specialized legal/medical/technical terms per page.
3.  **1,000+ Word Hub**: The Hub landing page must maintain a minimum of 1,000 handcrafted, expert words.
4.  **Jurisdiction Enforcement**: Mandatory Seoul Central District Court jurisdiction and Data Analyst Team verification in every footer.
5.  **Actuarial Logic**: Calculator logic must be based on real-world benchmarks (MDL filings, insurance limits, court verdicts), not simple multipliers.
6.  **Chronological Rigor**: Timelines must include specific dates (e.g., "September 2023 Label Change") to establish "Knowledge Windows."
7.  **Nuclear Tiers**: Injury categorization must use industry-standard tiers (e.g., Tier 1-4 for cancer or surgical vs. non-surgical).
8.  **Expert FAQ**: FAQs must answer complex, high-stakes questions that real claimants or analysts would ask.
9.  **Data Citation**: Mention specific studies (JAMA, FDA FAERS, IARC) to anchor authority.
10. **The "Soul" Factor**: Content must feel like it was written by a Senior Partner or Lead Analyst, expressing nuanced risk and probability.

---

## 🚀 양산 프로세스 (Migration to Production)

### 1단계: 금형 복사의 이식 (Porting)
기존 `truck-accident` 폴더를 새로운 주제 폴더로 복제하거나 이동합니다.

### 2단계: 경로 정규화 (Path Refactoring)
복제된 폴더 내에서 다음 경로를 검색하여 새로운 주제의 URL로 치환합니다.
- `/v3-sandbox/truck-flagship` -> `/your-new-topic`

### 3단계: 메타데이터 주입 (SEO Injection)
`page.tsx`의 `Metadata` 객체를 새로운 주제에 맞춰 업데이트합니다. (Title, Description, Canonical)

---

## 🛡 불멸의 규칙 (Immortal Rules)

1.  **관할권 고정**: 모든 푸터에는 반드시 Republic of Korea Jurisdiction 공지가 포함되어야 합니다.
2.  **신분 증명**: 모든 결과 페이지에는 `Data Analyst Expert Team`의 검증 배지가 상시 노출되어야 합니다.
3.  **No Nested Links**: 헤더와 네비게이션 구조에서 `<a>` 태그 중첩을 피하여 하이드레이션 오류를 방지합니다.

이 템플릿은 단순한 가이드가 아니라, 1인 기업이 수천 개의 고품질 서비스를 자동 생성하기 위한 **'양산형 아키텍처'**입니다.

가장 치명적인 부분인 관할권(Seoul)과 신분(Data Analyst)을 모든 페이지에 강제 적용했습니다.
