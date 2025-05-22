---
layout: about
title: Home
permalink: /
subtitle: Welcome to The 1st Workshop on Multilingual and Equitable Language Technologies (MELT) 👋

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

---

Recent advances in large language models (LLMs) have led to a paradigm shift in the economy, society, and daily life, demonstrating remarkable capabilities for complex tasks, such as reasoning and multimodality. However, **these innovations remain largely centered around English and are unevenly distributed across languages, cultures, and values**.

That is, linguistic and cultural inclusion is lacking in language models, mainly due to an imbalance of language sources used for training. While there are more than 7,000 languages in the world, most NLP research sheds light on a handful of high-resource languages ([Blasi et al., 2022](https://aclanthology.org/2022.acl-long.376/); [Qin et al., 2024](https://arxiv.org/abs/2404.04925); [Zhu et al., 2024](https://arxiv.org/abs/2411.11072)). For instance, only 7% and 17% of non-English tokens are incorporated into the pre-training data of GPT-3 ([Brown et al., 2020](https://papers.nips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html)) and BLOOM ([Scao et al., 2022](https://arxiv.org/abs/2211.05100)), respectively. Further, as we often rely on translation from English-centric datasets ([Jin et al., 2024](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00661/120915/KoBBQ-Korean-Bias-Benchmark-for-Question-Answering)) that predominantly reflect Western cultures ([Ahuja et al., 2023](https://aclanthology.org/2023.emnlp-main.258/)) to build multilingual benchmarks, these models naturally uphold social values close to North American and European cultures and neglect a wide array of languages and cultures ([Held et al., 2023](https://arxiv.org/abs/2311.08391); [AlKhamissi et al., 2024](https://aclanthology.org/2024.acl-long.671/); [Tao et al., 2024](https://doi.org/10.1093/pnasnexus/pgae346); [Xu et al., 2024](https://arxiv.org/abs/2410.12971); [Masoud et al., 2025](https://aclanthology.org/2025.coling-main.567/)).  

As LLMs are increasingly deployed in diverse, region- and culture-sensitive domains worldwide, the limitations of this linguistic and cultural imbalance become more pronounced, and their implications more consequential ([Yang et al., 2025](https://doi.org/10.1162/coli_a_00556); [Qadri et al., 2025a](https://arxiv.org/abs/2501.01056); [Qadri et al., 2025b](https://arxiv.org/abs/2503.19075)). These models often exhibit significant biases, reduced performance, and a lack of cultural sensitivity when applied to underrepresented languages and diverse sociocultural settings ([Foroutan et al., 2023](https://aclanthology.org/2022.emnlp-main.513/); [Liu et al., 2024](https://aclanthology.org/2024.naacl-long.112/); [Kwok et al., 2024](https://arxiv.org/abs/2408.06929); [Romanou et al., 2025](https://openreview.net/forum?id=k3gCieTXeY)).  

Addressing these limitations is essential to ensure that LLMs provide equal access to information, resources, and services to all populations equitably, regardless of language or cultural background. Our workshop aims to **meet the ultimate demand to enhance diversity and inclusion in language models**. We will disseminate the state-of-the-art research on building multilingual and multicultural LLMs, fostering international cross-disciplinary collaborations, and exploring the fundamental theoretical and methodological challenges in this field.

<hr/>

### Venue

The MELT workshop will co-located with COLM 2025, in Montreal, Canada. The exact room information will will be announced closer to the event date.

- **When:** October 10, 2025
- **Where:** Palais des Congrès, Montreal, Canada

<hr/>

### Important Dates

Please refer to our [Call for Papers](https://melt-workshop.github.io/cfp) for more details on paper submissions.
All deadlines are 11:59 PM Anywhere on Earth (AoE).

- Workshop Track Submission Deadline: June 23, 2025
- Conference Track Submission Deadline: July 14, 2025
- Notification of Acceptance: July 21, 2025
- Workshop Date: October 10, 2025

<hr/>

### Schedules

We will have 5 keynotes, 1 panel discussion, and a poster session.
Please refer to the tentative schedules as follows:

| Time                 | Event                      |
|----------------------|----------------------------|
| 09:00 AM - 09:10 AM | Opening Remarks           |
| 09:10 AM - 09:50 AM | Keynote 1                 |
| 09:50 AM - 10:30 AM | Keynote 2                 |
| 10:30 AM - 11:00 AM | Coffee Break              |
| 11:00 AM - 11:40 AM | Keynote 3                 |
| 11:40 AM - 12:20 PM | Keynote 4                 |
| 12:20 PM - 01:50 PM | Lunch Break               |
| 01:50 PM - 02:30 PM | Keynote 5                 |
| 02:30 PM - 03:30 PM | Panel Discussion          |
| 03:30 PM - 04:00 PM | Coffee Break              |
| 04:00 PM - 05:00 PM | Poster Session            |
| 05:00 PM - 05:10 PM | Awards and Closing Remarks |

<hr/>

### Keynotes
Click [here](https://melt-workshop.github.io/keynotes) for more details on keynotes!

<div class="keynote-grid">
  {% for keynote in site.data.keynotes %}
    {% include keynote_card.liquid keynote=keynote %}
  {% endfor %}
</div>

<hr/>

### Organizers

<div class="organizers-grid-small">
  {% for organizer in site.data.organizers %}
    {% include organizer_card.liquid organizer=organizer %}
  {% endfor %}
</div>

<hr/>

### Advisory Boards

<div class="organizers-grid-small">
  {% for organizer in site.data.advisors %}
    {% include organizer_card.liquid organizer=organizer %}
  {% endfor %}
</div>