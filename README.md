Banking System Architecture (TypeScript)

A modular and extensible banking system built using Object-Oriented Programming (OOP) and Clean Architecture principles in TypeScript. This project demonstrates how to design scalable domain logic using interfaces, services, and strong typing.

Overview

This system models different types of bank accounts with distinct withdrawal rules and centralizes account management through a service layer.

The architecture is designed to be:

Easy to extend with new account types

Easy to test

Cleanly separated by responsibility

Strongly typed and predictable

Architecture Principles
1. Separation of Concerns

Each layer has a single responsibility:

Contracts (Interfaces & Types)
Define system behavior and data structures without implementation.

Domain (Business Logic)
Contains all account logic and rules.

Service Layer
Orchestrates domain objects and acts as a gateway for external systems (UI, API, etc).
