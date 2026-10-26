# Production Routes and Endpoints

**Base Domain:** `https://www.yugatirtha.com`

---

## 1. Primary Page Routes

| Route Path | Full Canonical Production URL | HTTP Method | Type |
| :--- | :--- | :---: | :--- |
| `/` | `https://www.yugatirtha.com/` | GET | Page |
| `/domestic` | `https://www.yugatirtha.com/domestic` | GET | Page |
| `/international` | `https://www.yugatirtha.com/international` | GET | Page |
| `/spiritualjourney` | `https://www.yugatirtha.com/spiritualjourney` | GET | Page |
| `/experiences` | `https://www.yugatirtha.com/experiences` | GET | Page |
| `/about` | `https://www.yugatirtha.com/about` | GET | Page |
| `/contact` | `https://www.yugatirtha.com/contact` | GET | Page |
| `/thank-you` | `https://www.yugatirtha.com/thank-you` | GET | Conversion Page |

---

## 2. Destination Primary Itinerary Routes

### Domestic Routes
| Route Path | Full Production URL | HTTP Method | Circuits | Type |
| :--- | :--- | :---: | :---: | :--- |
| `/itinerary/kashmir` | `https://www.yugatirtha.com/itinerary/kashmir` | GET | 3 circuits | Dynamic Route |
| `/itinerary/ladakh` | `https://www.yugatirtha.com/itinerary/ladakh` | GET | 3 circuits | Dynamic Route |
| `/itinerary/himachal` | `https://www.yugatirtha.com/itinerary/himachal` | GET | 4 circuits | Dynamic Route |
| `/itinerary/spiti` | `https://www.yugatirtha.com/itinerary/spiti` | GET | 3 circuits | Dynamic Route |
| `/itinerary/meghalaya` | `https://www.yugatirtha.com/itinerary/meghalaya` | GET | 3 circuits | Dynamic Route |
| `/itinerary/sikkim` | `https://www.yugatirtha.com/itinerary/sikkim` | GET | 3 circuits | Dynamic Route |
| `/itinerary/arunachal` | `https://www.yugatirtha.com/itinerary/arunachal` | GET | 3 circuits | Dynamic Route |
| `/itinerary/rajasthan` | `https://www.yugatirtha.com/itinerary/rajasthan` | GET | 3 circuits | Dynamic Route |

### International Routes
| Route Path | Full Production URL | HTTP Method | Circuits | Type |
| :--- | :--- | :---: | :---: | :--- |
| `/itinerary/bali` | `https://www.yugatirtha.com/itinerary/bali` | GET | 2 circuits | Dynamic Route |
| `/itinerary/japan` | `https://www.yugatirtha.com/itinerary/japan` | GET | 2 circuits | Dynamic Route |
| `/itinerary/srilanka` | `https://www.yugatirtha.com/itinerary/srilanka` | GET | 2 circuits | Dynamic Route |
| `/itinerary/philippines` | `https://www.yugatirtha.com/itinerary/philippines` | GET | 2 circuits | Dynamic Route |
| `/itinerary/georgia` | `https://www.yugatirtha.com/itinerary/georgia` | GET | 2 circuits | Dynamic Route |
| `/itinerary/vietnam` | `https://www.yugatirtha.com/itinerary/vietnam` | GET | 2 circuits | Dynamic Route |

### Spiritual Routes
| Route Path | Full Production URL | HTTP Method | Circuits | Type |
| :--- | :--- | :---: | :---: | :--- |
| `/itinerary/adi-kailash` | `https://www.yugatirtha.com/itinerary/adi-kailash` | GET | 1 circuits | Dynamic Route |
| `/itinerary/badrinath` | `https://www.yugatirtha.com/itinerary/badrinath` | GET | 1 circuits | Dynamic Route |
| `/itinerary/do-dham` | `https://www.yugatirtha.com/itinerary/do-dham` | GET | 1 circuits | Dynamic Route |
| `/itinerary/char-dham` | `https://www.yugatirtha.com/itinerary/char-dham` | GET | 1 circuits | Dynamic Route |
| `/itinerary/kainchi-dham` | `https://www.yugatirtha.com/itinerary/kainchi-dham` | GET | 1 circuits | Dynamic Route |
| `/itinerary/kashi` | `https://www.yugatirtha.com/itinerary/kashi` | GET | 3 circuits | Dynamic Route |
| `/itinerary/ujjain` | `https://www.yugatirtha.com/itinerary/ujjain` | GET | 2 circuits | Dynamic Route |
| `/itinerary/maharashtra-jyotirling` | `https://www.yugatirtha.com/itinerary/maharashtra-jyotirling` | GET | 3 circuits | Dynamic Route |
| `/itinerary/somnath-dwarka` | `https://www.yugatirtha.com/itinerary/somnath-dwarka` | GET | 1 circuits | Dynamic Route |
| `/itinerary/puri` | `https://www.yugatirtha.com/itinerary/puri` | GET | 2 circuits | Dynamic Route |
| `/itinerary/rameswaram` | `https://www.yugatirtha.com/itinerary/rameswaram` | GET | 1 circuits | Dynamic Route |
| `/itinerary/pancha-bhoota` | `https://www.yugatirtha.com/itinerary/pancha-bhoota` | GET | 1 circuits | Dynamic Route |
| `/itinerary/madurai-rameshwaram` | `https://www.yugatirtha.com/itinerary/madurai-rameshwaram` | GET | 1 circuits | Dynamic Route |
| `/itinerary/mallikarjun` | `https://www.yugatirtha.com/itinerary/mallikarjun` | GET | 1 circuits | Dynamic Route |
| `/itinerary/tirupati` | `https://www.yugatirtha.com/itinerary/tirupati` | GET | 2 circuits | Dynamic Route |
| `/itinerary/khatu-shyam` | `https://www.yugatirtha.com/itinerary/khatu-shyam` | GET | 1 circuits | Dynamic Route |
| `/itinerary/baidyanath` | `https://www.yugatirtha.com/itinerary/baidyanath` | GET | 1 circuits | Dynamic Route |

### Preview Route
| Route Path | Full Production URL | HTTP Method | Type |
| :--- | :--- | :---: | :--- |
| `/itinerary/kerala` | `https://www.yugatirtha.com/itinerary/kerala` | GET | Preview Route |

---

## 3. Dedicated Sub-Itinerary Endpoints (Circuits & Durations)

### Domestic Sub-Itineraries

| Destination | Circuit / Duration | Sub-Itinerary Path | Full Canonical URL | Days | API JSON Endpoint |
| :--- | :--- | :--- | :--- | :---: | :--- |
| Kashmir | **4N/5D** (Kashmir 4N/5D) | `/itinerary/kashmir/4n-5d` | `https://www.yugatirtha.com/itinerary/kashmir/4n-5d` | 5 Days | `/api/itineraries/kashmir/4n-5d.json` |
| Kashmir | **5N/6D** (Kashmir 5N/6D) | `/itinerary/kashmir/5n-6d` | `https://www.yugatirtha.com/itinerary/kashmir/5n-6d` | 6 Days | `/api/itineraries/kashmir/5n-6d.json` |
| Kashmir | **6N/7D** (Kashmir 6N/7D) | `/itinerary/kashmir/6n-7d` | `https://www.yugatirtha.com/itinerary/kashmir/6n-7d` | 7 Days | `/api/itineraries/kashmir/6n-7d.json` |
| Ladakh | **5N/6D** (Ladakh 5N/6D) | `/itinerary/ladakh/5n-6d` | `https://www.yugatirtha.com/itinerary/ladakh/5n-6d` | 6 Days | `/api/itineraries/ladakh/5n-6d.json` |
| Ladakh | **6N/7D** (Ladakh 6N/7D) | `/itinerary/ladakh/6n-7d` | `https://www.yugatirtha.com/itinerary/ladakh/6n-7d` | 7 Days | `/api/itineraries/ladakh/6n-7d.json` |
| Ladakh | **7N/8D** (Ladakh 7N/8D) | `/itinerary/ladakh/7n-8d` | `https://www.yugatirtha.com/itinerary/ladakh/7n-8d` | 8 Days | `/api/itineraries/ladakh/7n-8d.json` |
| Himachal Pradesh | **4N/5D** (Himachal 4N/5D) | `/itinerary/himachal/4n-5d` | `https://www.yugatirtha.com/itinerary/himachal/4n-5d` | 6 Days | `/api/itineraries/himachal/4n-5d.json` |
| Himachal Pradesh | **5N/6D** (Himachal 5N/6D) | `/itinerary/himachal/5n-6d` | `https://www.yugatirtha.com/itinerary/himachal/5n-6d` | 6 Days | `/api/itineraries/himachal/5n-6d.json` |
| Himachal Pradesh | **5N/6D** (Himachal 5N/6D) | `/itinerary/himachal/5n-6d-jibhi-tirthan` | `https://www.yugatirtha.com/itinerary/himachal/5n-6d-jibhi-tirthan` | 7 Days | `/api/itineraries/himachal/5n-6d-jibhi-tirthan.json` |
| Himachal Pradesh | **8N/9D** (Himachal 8N/9D) | `/itinerary/himachal/8n-9d` | `https://www.yugatirtha.com/itinerary/himachal/8n-9d` | 10 Days | `/api/itineraries/himachal/8n-9d.json` |
| Spiti Valley | **6N/7D** (Spiti Valley 6N/7D) | `/itinerary/spiti/6n-7d` | `https://www.yugatirtha.com/itinerary/spiti/6n-7d` | 9 Days | `/api/itineraries/spiti/6n-7d.json` |
| Spiti Valley | **7N/8D** (Spiti Valley 7N/8D) | `/itinerary/spiti/7n-8d` | `https://www.yugatirtha.com/itinerary/spiti/7n-8d` | 10 Days | `/api/itineraries/spiti/7n-8d.json` |
| Spiti Valley | **8N/9D** (Spiti Valley 8N/9D) | `/itinerary/spiti/8n-9d` | `https://www.yugatirtha.com/itinerary/spiti/8n-9d` | 10 Days | `/api/itineraries/spiti/8n-9d.json` |
| Meghalaya | **4N/5D** (Meghalaya 4N/5D) | `/itinerary/meghalaya/4n-5d` | `https://www.yugatirtha.com/itinerary/meghalaya/4n-5d` | 5 Days | `/api/itineraries/meghalaya/4n-5d.json` |
| Meghalaya | **5N/6D** (Meghalaya 5N/6D) | `/itinerary/meghalaya/5n-6d` | `https://www.yugatirtha.com/itinerary/meghalaya/5n-6d` | 6 Days | `/api/itineraries/meghalaya/5n-6d.json` |
| Meghalaya | **6N/7D** (Meghalaya 6N/7D) | `/itinerary/meghalaya/6n-7d` | `https://www.yugatirtha.com/itinerary/meghalaya/6n-7d` | 7 Days | `/api/itineraries/meghalaya/6n-7d.json` |
| Sikkim | **4N/5D** (Sikkim 4N/5D) | `/itinerary/sikkim/4n-5d` | `https://www.yugatirtha.com/itinerary/sikkim/4n-5d` | 5 Days | `/api/itineraries/sikkim/4n-5d.json` |
| Sikkim | **5N/6D** (Sikkim 5N/6D) | `/itinerary/sikkim/5n-6d` | `https://www.yugatirtha.com/itinerary/sikkim/5n-6d` | 6 Days | `/api/itineraries/sikkim/5n-6d.json` |
| Sikkim | **6N/7D** (Sikkim 6N/7D) | `/itinerary/sikkim/6n-7d` | `https://www.yugatirtha.com/itinerary/sikkim/6n-7d` | 7 Days | `/api/itineraries/sikkim/6n-7d.json` |
| Arunachal Pradesh | **4N/5D** (Arunachal 4N/5D) | `/itinerary/arunachal/4n-5d` | `https://www.yugatirtha.com/itinerary/arunachal/4n-5d` | 5 Days | `/api/itineraries/arunachal/4n-5d.json` |
| Arunachal Pradesh | **5N/6D** (Arunachal 5N/6D) | `/itinerary/arunachal/5n-6d` | `https://www.yugatirtha.com/itinerary/arunachal/5n-6d` | 6 Days | `/api/itineraries/arunachal/5n-6d.json` |
| Arunachal Pradesh | **6N/7D** (Arunachal 6N/7D) | `/itinerary/arunachal/6n-7d` | `https://www.yugatirtha.com/itinerary/arunachal/6n-7d` | 7 Days | `/api/itineraries/arunachal/6n-7d.json` |
| Rajasthan | **6N/7D** (Rajasthan 6N/7D) | `/itinerary/rajasthan/6n-7d` | `https://www.yugatirtha.com/itinerary/rajasthan/6n-7d` | 7 Days | `/api/itineraries/rajasthan/6n-7d.json` |
| Rajasthan | **7N/8D** (Rajasthan 7N/8D) | `/itinerary/rajasthan/7n-8d` | `https://www.yugatirtha.com/itinerary/rajasthan/7n-8d` | 8 Days | `/api/itineraries/rajasthan/7n-8d.json` |
| Rajasthan | **9N/10D** (Rajasthan 9N/10D) | `/itinerary/rajasthan/9n-10d` | `https://www.yugatirtha.com/itinerary/rajasthan/9n-10d` | 10 Days | `/api/itineraries/rajasthan/9n-10d.json` |

### International Sub-Itineraries

| Destination | Circuit / Duration | Sub-Itinerary Path | Full Canonical URL | Days | API JSON Endpoint |
| :--- | :--- | :--- | :--- | :---: | :--- |
| Bali | **5N/6D** (Bali 5N/6D) | `/itinerary/bali/5n-6d` | `https://www.yugatirtha.com/itinerary/bali/5n-6d` | 6 Days | `/api/itineraries/bali/5n-6d.json` |
| Bali | **5N/6D** (Bali 5N/6D (Yoga)) | `/itinerary/bali/5n-6d-yoga` | `https://www.yugatirtha.com/itinerary/bali/5n-6d-yoga` | 6 Days | `/api/itineraries/bali/5n-6d-yoga.json` |
| Japan | **7N/8D** (Japan 7N/8D) | `/itinerary/japan/7n-8d` | `https://www.yugatirtha.com/itinerary/japan/7n-8d` | 8 Days | `/api/itineraries/japan/7n-8d.json` |
| Japan | **8N/9D** (Japan 8N/9D) | `/itinerary/japan/8n-9d` | `https://www.yugatirtha.com/itinerary/japan/8n-9d` | 9 Days | `/api/itineraries/japan/8n-9d.json` |
| Sri Lanka | **5N/6D** (Sri Lanka 5N/6D) | `/itinerary/srilanka/5n-6d` | `https://www.yugatirtha.com/itinerary/srilanka/5n-6d` | 6 Days | `/api/itineraries/srilanka/5n-6d.json` |
| Sri Lanka | **5N/6D** (Sri Lanka 5N/6D (Ella & Trincomalee)) | `/itinerary/srilanka/5n-6d-ella-trincomalee` | `https://www.yugatirtha.com/itinerary/srilanka/5n-6d-ella-trincomalee` | 6 Days | `/api/itineraries/srilanka/5n-6d-ella-trincomalee.json` |
| Philippines | **7N/8D** (Philippines 7N/8D) | `/itinerary/philippines/7n-8d` | `https://www.yugatirtha.com/itinerary/philippines/7n-8d` | 8 Days | `/api/itineraries/philippines/7n-8d.json` |
| Philippines | **6N/7D** (Philippines 6N/7D) | `/itinerary/philippines/6n-7d` | `https://www.yugatirtha.com/itinerary/philippines/6n-7d` | 7 Days | `/api/itineraries/philippines/6n-7d.json` |
| Georgia | **5N/6D** (Georgia 5N/6D) | `/itinerary/georgia/5n-6d` | `https://www.yugatirtha.com/itinerary/georgia/5n-6d` | 6 Days | `/api/itineraries/georgia/5n-6d.json` |
| Georgia | **6N/7D** (Georgia 6N/7D) | `/itinerary/georgia/6n-7d` | `https://www.yugatirtha.com/itinerary/georgia/6n-7d` | 7 Days | `/api/itineraries/georgia/6n-7d.json` |
| Vietnam | **6N/7D** (Vietnam 6N/7D) | `/itinerary/vietnam/6n-7d` | `https://www.yugatirtha.com/itinerary/vietnam/6n-7d` | 7 Days | `/api/itineraries/vietnam/6n-7d.json` |
| Vietnam | **7N/8D** (Vietnam 7N/8D) | `/itinerary/vietnam/7n-8d` | `https://www.yugatirtha.com/itinerary/vietnam/7n-8d` | 8 Days | `/api/itineraries/vietnam/7n-8d.json` |

### Spiritual Sub-Itineraries

| Destination | Circuit / Duration | Sub-Itinerary Path | Full Canonical URL | Days | API JSON Endpoint |
| :--- | :--- | :--- | :--- | :---: | :--- |
| Adi Kailash | **7N/8D** (Adi Kailash & Om Parvat Yatra 7N/8D) | `/itinerary/adi-kailash/7n-8d` | `https://www.yugatirtha.com/itinerary/adi-kailash/7n-8d` | 8 Days | `/api/itineraries/adi-kailash/7n-8d.json` |
| Badrinath | **4N/5D** (Badrinath 4N/5D) | `/itinerary/badrinath/4n-5d` | `https://www.yugatirtha.com/itinerary/badrinath/4n-5d` | 5 Days | `/api/itineraries/badrinath/4n-5d.json` |
| Do Dham | **5N/6D** (Do Dham 5N/6D) | `/itinerary/do-dham/5n-6d` | `https://www.yugatirtha.com/itinerary/do-dham/5n-6d` | 6 Days | `/api/itineraries/do-dham/5n-6d.json` |
| Char Dham | **9N/10D** (Char Dham 9N/10D) | `/itinerary/char-dham/9n-10d` | `https://www.yugatirtha.com/itinerary/char-dham/9n-10d` | 10 Days | `/api/itineraries/char-dham/9n-10d.json` |
| Kainchi Dham | **2N/3D** (Kainchi Dham 2N/3D) | `/itinerary/kainchi-dham/2n-3d` | `https://www.yugatirtha.com/itinerary/kainchi-dham/2n-3d` | 3 Days | `/api/itineraries/kainchi-dham/2n-3d.json` |
| Kashi | **4N/5D** (Varanasi - Ayodhya 4N/5D) | `/itinerary/kashi/4n-5d` | `https://www.yugatirtha.com/itinerary/kashi/4n-5d` | 5 Days | `/api/itineraries/kashi/4n-5d.json` |
| Kashi | **2N/3D** (Kashi 2N/3D) | `/itinerary/kashi/2n-3d` | `https://www.yugatirtha.com/itinerary/kashi/2n-3d` | 3 Days | `/api/itineraries/kashi/2n-3d.json` |
| Kashi | **4N/5D** (Kashi-Prayagraj-Ayodhya 4N/5D) | `/itinerary/kashi/4n-5d-sangam` | `https://www.yugatirtha.com/itinerary/kashi/4n-5d-sangam` | 5 Days | `/api/itineraries/kashi/4n-5d-sangam.json` |
| Ujjain & Omkareshwar | **2N/3D** (Bhasma Aarti Special 2N/3D) | `/itinerary/ujjain/2n-3d` | `https://www.yugatirtha.com/itinerary/ujjain/2n-3d` | 3 Days | `/api/itineraries/ujjain/2n-3d.json` |
| Ujjain & Omkareshwar | **2N/3D** (VIP Passes 2N/3D) | `/itinerary/ujjain/2n-3d-vip` | `https://www.yugatirtha.com/itinerary/ujjain/2n-3d-vip` | 3 Days | `/api/itineraries/ujjain/2n-3d-vip.json` |
| Maharashtra Jyotirlinga | **2N/3D** (Maharashtra Jyotirling Pune 2N/3D) | `/itinerary/maharashtra-jyotirling/2n-3d` | `https://www.yugatirtha.com/itinerary/maharashtra-jyotirling/2n-3d` | 3 Days | `/api/itineraries/maharashtra-jyotirling/2n-3d.json` |
| Maharashtra Jyotirlinga | **3N/4D** (Maharashtra Jyotirling Pune 3N/4D) | `/itinerary/maharashtra-jyotirling/3n-4d` | `https://www.yugatirtha.com/itinerary/maharashtra-jyotirling/3n-4d` | 4 Days | `/api/itineraries/maharashtra-jyotirling/3n-4d.json` |
| Maharashtra Jyotirlinga | **3N/4D** (Maharashtra Jyotirling Mumbai 3N/4D) | `/itinerary/maharashtra-jyotirling/3n-4d-mumbai` | `https://www.yugatirtha.com/itinerary/maharashtra-jyotirling/3n-4d-mumbai` | 4 Days | `/api/itineraries/maharashtra-jyotirling/3n-4d-mumbai.json` |
| Somnath & Dwarka | **3N/4D** (Gujarat Jyotirling 3N/4D) | `/itinerary/somnath-dwarka/3n-4d` | `https://www.yugatirtha.com/itinerary/somnath-dwarka/3n-4d` | 4 Days | `/api/itineraries/somnath-dwarka/3n-4d.json` |
| Puri Jagannath Dham | **4N/5D** (Puri Dham 4N/5D) | `/itinerary/puri/4n-5d` | `https://www.yugatirtha.com/itinerary/puri/4n-5d` | 5 Days | `/api/itineraries/puri/4n-5d.json` |
| Puri Jagannath Dham | **3N/4D** (Puri Konark 3N/4D) | `/itinerary/puri/3n-4d` | `https://www.yugatirtha.com/itinerary/puri/3n-4d` | 4 Days | `/api/itineraries/puri/3n-4d.json` |
| Rameswaram | **4N/5D** (Rameswaram 4N/5D) | `/itinerary/rameswaram/4n-5d` | `https://www.yugatirtha.com/itinerary/rameswaram/4n-5d` | 5 Days | `/api/itineraries/rameswaram/4n-5d.json` |
| Pancha Bhoota Stalam | **6N/7D** (Pancha Bhoota Stalam 6N/7D) | `/itinerary/pancha-bhoota/6n-7d` | `https://www.yugatirtha.com/itinerary/pancha-bhoota/6n-7d` | 7 Days | `/api/itineraries/pancha-bhoota/6n-7d.json` |
| Madurai & Rameshwaram | **2N/3D** (Madurai - Rameshwaram 2N/3D) | `/itinerary/madurai-rameshwaram/2n-3d` | `https://www.yugatirtha.com/itinerary/madurai-rameshwaram/2n-3d` | 3 Days | `/api/itineraries/madurai-rameshwaram/2n-3d.json` |
| Mallikarjun Jyotirling | **3N/4D** (Mallikarjun Jyotirling 3N/4D) | `/itinerary/mallikarjun/3n-4d` | `https://www.yugatirtha.com/itinerary/mallikarjun/3n-4d` | 4 Days | `/api/itineraries/mallikarjun/3n-4d.json` |
| Tirupati Balaji | **2N/3D** (Tirupati 2N/3D) | `/itinerary/tirupati/2n-3d` | `https://www.yugatirtha.com/itinerary/tirupati/2n-3d` | 3 Days | `/api/itineraries/tirupati/2n-3d.json` |
| Tirupati Balaji | **2N/3D** (Tirupati with Kalahasti 2N/3D) | `/itinerary/tirupati/2n-3d-kalahasti` | `https://www.yugatirtha.com/itinerary/tirupati/2n-3d-kalahasti` | 3 Days | `/api/itineraries/tirupati/2n-3d-kalahasti.json` |
| Khatu Shyam Ji | **2N/3D** (Khatu Shyam Ji - Salasar Balaji - Jaipur 2N/3D) | `/itinerary/khatu-shyam/2n-3d` | `https://www.yugatirtha.com/itinerary/khatu-shyam/2n-3d` | 3 Days | `/api/itineraries/khatu-shyam/2n-3d.json` |
| Baidyanath Jyotirlinga | **2N/3D** (Baidyanath Jyotirlinga Yatra 2N/3D) | `/itinerary/baidyanath/2n-3d` | `https://www.yugatirtha.com/itinerary/baidyanath/2n-3d` | 3 Days | `/api/itineraries/baidyanath/2n-3d.json` |

---

## 4. Static JSON API Endpoints

| Endpoint Path | Full Production API URL | HTTP Method | Description |
| :--- | :--- | :---: | :--- |
| `/api/itineraries.json` | `https://www.yugatirtha.com/api/itineraries.json` | GET | Master catalog of all destinations and sub-itineraries |
| `/api/itineraries/index.json` | `https://www.yugatirtha.com/api/itineraries/index.json` | GET | Master catalog index |
| `/api/itineraries/maharashtra-3-jyotirlinga.json` | `https://www.yugatirtha.com/api/itineraries/maharashtra-3-jyotirlinga.json` | GET | All packages for Maharashtra 3 Jyotirlinga Yatra |
| `/api/itineraries/nainital-kainchi-bhimtal.json` | `https://www.yugatirtha.com/api/itineraries/nainital-kainchi-bhimtal.json` | GET | All packages for Nainital • Kainchi Dham • Bhimtal |
| `/api/itineraries/gujarat-jyotirlinga.json` | `https://www.yugatirtha.com/api/itineraries/gujarat-jyotirlinga.json` | GET | All packages for Gujarat Jyotirlinga Yatra |
| `/api/itineraries/ujjain-omkareshwar-yatra.json` | `https://www.yugatirtha.com/api/itineraries/ujjain-omkareshwar-yatra.json` | GET | All packages for Ujjain & Omkareshwar Jyotirlinga |
| `/api/itineraries/kashmir.json` | `https://www.yugatirtha.com/api/itineraries/kashmir.json` | GET | All packages for Kashmir |
| `/api/itineraries/ladakh.json` | `https://www.yugatirtha.com/api/itineraries/ladakh.json` | GET | All packages for Ladakh |
| `/api/itineraries/himachal.json` | `https://www.yugatirtha.com/api/itineraries/himachal.json` | GET | All packages for Himachal Pradesh |
| `/api/itineraries/spiti.json` | `https://www.yugatirtha.com/api/itineraries/spiti.json` | GET | All packages for Spiti Valley |
| `/api/itineraries/meghalaya.json` | `https://www.yugatirtha.com/api/itineraries/meghalaya.json` | GET | All packages for Meghalaya |
| `/api/itineraries/sikkim.json` | `https://www.yugatirtha.com/api/itineraries/sikkim.json` | GET | All packages for Sikkim |
| `/api/itineraries/arunachal.json` | `https://www.yugatirtha.com/api/itineraries/arunachal.json` | GET | All packages for Arunachal Pradesh |
| `/api/itineraries/rajasthan.json` | `https://www.yugatirtha.com/api/itineraries/rajasthan.json` | GET | All packages for Rajasthan |
| `/api/itineraries/bali.json` | `https://www.yugatirtha.com/api/itineraries/bali.json` | GET | All packages for Bali |
| `/api/itineraries/japan.json` | `https://www.yugatirtha.com/api/itineraries/japan.json` | GET | All packages for Japan |
| `/api/itineraries/srilanka.json` | `https://www.yugatirtha.com/api/itineraries/srilanka.json` | GET | All packages for Sri Lanka |
| `/api/itineraries/philippines.json` | `https://www.yugatirtha.com/api/itineraries/philippines.json` | GET | All packages for Philippines |
| `/api/itineraries/georgia.json` | `https://www.yugatirtha.com/api/itineraries/georgia.json` | GET | All packages for Georgia |
| `/api/itineraries/vietnam.json` | `https://www.yugatirtha.com/api/itineraries/vietnam.json` | GET | All packages for Vietnam |
| `/api/itineraries/adi-kailash.json` | `https://www.yugatirtha.com/api/itineraries/adi-kailash.json` | GET | All packages for Adi Kailash |
| `/api/itineraries/badrinath.json` | `https://www.yugatirtha.com/api/itineraries/badrinath.json` | GET | All packages for Badrinath |
| `/api/itineraries/do-dham.json` | `https://www.yugatirtha.com/api/itineraries/do-dham.json` | GET | All packages for Do Dham |
| `/api/itineraries/char-dham.json` | `https://www.yugatirtha.com/api/itineraries/char-dham.json` | GET | All packages for Char Dham |
| `/api/itineraries/kainchi-dham.json` | `https://www.yugatirtha.com/api/itineraries/kainchi-dham.json` | GET | All packages for Kainchi Dham |
| `/api/itineraries/kashi.json` | `https://www.yugatirtha.com/api/itineraries/kashi.json` | GET | All packages for Kashi |
| `/api/itineraries/ujjain.json` | `https://www.yugatirtha.com/api/itineraries/ujjain.json` | GET | All packages for Ujjain & Omkareshwar |
| `/api/itineraries/maharashtra-jyotirling.json` | `https://www.yugatirtha.com/api/itineraries/maharashtra-jyotirling.json` | GET | All packages for Maharashtra Jyotirlinga |
| `/api/itineraries/somnath-dwarka.json` | `https://www.yugatirtha.com/api/itineraries/somnath-dwarka.json` | GET | All packages for Somnath & Dwarka |
| `/api/itineraries/puri.json` | `https://www.yugatirtha.com/api/itineraries/puri.json` | GET | All packages for Puri Jagannath Dham |
| `/api/itineraries/rameswaram.json` | `https://www.yugatirtha.com/api/itineraries/rameswaram.json` | GET | All packages for Rameswaram |
| `/api/itineraries/pancha-bhoota.json` | `https://www.yugatirtha.com/api/itineraries/pancha-bhoota.json` | GET | All packages for Pancha Bhoota Stalam |
| `/api/itineraries/madurai-rameshwaram.json` | `https://www.yugatirtha.com/api/itineraries/madurai-rameshwaram.json` | GET | All packages for Madurai & Rameshwaram |
| `/api/itineraries/mallikarjun.json` | `https://www.yugatirtha.com/api/itineraries/mallikarjun.json` | GET | All packages for Mallikarjun Jyotirling |
| `/api/itineraries/tirupati.json` | `https://www.yugatirtha.com/api/itineraries/tirupati.json` | GET | All packages for Tirupati Balaji |
| `/api/itineraries/khatu-shyam.json` | `https://www.yugatirtha.com/api/itineraries/khatu-shyam.json` | GET | All packages for Khatu Shyam Ji |
| `/api/itineraries/baidyanath.json` | `https://www.yugatirtha.com/api/itineraries/baidyanath.json` | GET | All packages for Baidyanath Jyotirlinga |

> **Note:** Every sub-itinerary also has an individual JSON endpoint, e.g. `https://www.yugatirtha.com/api/itineraries/kashmir/4n-5d.json`.

---

## 5. Alias & Redirect Routes

| Incoming Route | Action / Destination Route | HTTP Status |
| :--- | :--- | :---: |
| `/enquiry` | Serves Contact Page (`/contact`) | 200 OK |
| `/enquire` | Serves Contact Page (`/contact`) | 200 OK |
| `/thankyou` | Redirects to `/thank-you` | 301 Redirect |
| `/itinerary` | Redirects to `/domestic` | 301 Redirect |
| `/itenary` | Redirects to `/domestic` | 301 Redirect |
| `/itineraries` | Redirects to `/domestic` | 301 Redirect |
| `/itenary/:destination` | Resolves to `/itinerary/:destination` | 200 OK |
| `/itenary/:destination/:subItinerary` | Resolves to `/itinerary/:destination/:subItinerary` | 200 OK |

---

## 6. In-Page Section Anchor Routes

| Anchor Route | Target Section |
| :--- | :--- |
| `https://www.yugatirtha.com/domestic#north-india` | North India circuits |
| `https://www.yugatirtha.com/domestic#northeast-india` | Northeast India circuits |
| `https://www.yugatirtha.com/domestic#west-india` | West India circuits |
| `https://www.yugatirtha.com/domestic#south-india` | South India circuits |
| `https://www.yugatirtha.com/international#southeast-asia` | Southeast Asia circuits |
| `https://www.yugatirtha.com/international#east-&-south-asia` | East & South Asia circuits |
| `https://www.yugatirtha.com/international#cis-countries` | CIS Countries circuits |
| `https://www.yugatirtha.com/spiritualjourney#north` | North India Pilgrimages |
| `https://www.yugatirtha.com/spiritualjourney#south` | South India Pilgrimages |
| `https://www.yugatirtha.com/spiritualjourney#east` | East India Pilgrimages |
| `https://www.yugatirtha.com/spiritualjourney#west` | West India Pilgrimages |

---

## 7. API & External Service Endpoints

| Endpoint URL | HTTP Method | Purpose |
| :--- | :---: | :--- |
| `https://formsubmit.co/ajax/info@yugatirtha.com` | POST | Primary enquiry and lead form submission |
| `https://api.web3forms.com/submit` | POST | Fallback enquiry and lead form submission |
| `https://wa.me/918591262424` | GET | WhatsApp direct booking and enquiry endpoint |

---

## 8. Static & Crawler Endpoints

| Endpoint URL | HTTP Method | Content Type |
| :--- | :---: | :--- |
| `https://www.yugatirtha.com/sitemap.xml` | GET | XML Sitemap (`text/xml`) - Includes all 57 sub-itineraries & thank-you page |
| `https://www.yugatirtha.com/robots.txt` | GET | Crawler Directives (`text/plain`) |
