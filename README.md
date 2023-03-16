# Encargos

<p align="center">
    Encargos by <a href="https://github.com/EuCarlos">@EuCarlos</a><br>
    <img src="https://img.shields.io/badge/SWAGGER_UI-1d4145?style=for-the-badge&logo=swagger&logoColor=85ea2d" alt="Logo Swagger UI"/>
    <img src="https://img.shields.io/badge/-TypeScript-2f74c3?style=for-the-badge&logo=typescript&logoColor=white" alt="Logo TypeScript" />
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/encargos?color=orange&style=for-the-badge">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/encargos?style=for-the-badge">
</p>

## Summary
- [1. Installation:](#1-installation)
- [2. Run the project](#2-run-the-project)
- [3. Documentation](#3-documentation)
- [4. How to contribute to this project?](#4-how-to-contribute-to-this-project)
- [5. How do I report a bug or request a feature?](#5-how-do-i-report-a-bug-or-request-a-feature)

## 1. Installation:
Clone the repo and Install dependencies using Yarn:
```bash
git clone https://github.com/EuCarlos/encargos.git \
  && cd encargos \
  && yarn install
```
### 2. Run the project

```bash
yarn dev
```

#### 2.1 Available routes
| METHOD | URL | |
| :----: | :-- | :--: |
| GET | / | browser |
| GET | /api/v1/workouts |
| POST | /api/v1/encargos |
| GET | /api/v1/encargos |
| GET | /api/v1/encargos/:encargoId |
| PUT | /api/v1/encargos/:encargoId |
| DELETE | /api/v1/encargos/:encargoId |
| GET | /api/v1/docs | browser |

## 3. Documentation
All route information has been documented with **Swagger UI**, and can be found in the `/api/v1/docs` route


## 4. How to contribute to this project?
Before starting, check and follow the instructions for contributing to the repository. If not, you can follow the instructions below:

1. Fork the project
2. Create a new branch: git checkout -b nova-branch
3. Commit your changes: git commit -m 'I added something'
4. Push to branch: git push origin nova-branch
5. Open a Pull Request

## 5. How do I report a bug or request a feature?
If you want to report a bug or request a feature, go to [Issue](https://github.com/eucarlos/encargos/issues) on the GitHub Project and add your request.

___

<p align="center">
Created with 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a></p>
