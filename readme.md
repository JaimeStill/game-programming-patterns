# Game Programming Patterns

A study of architecture and design patterns based on [Robert Nystrom's](http://journal.stuffwithstuff.com/) book [Game Programming Patterns](https://gameprogrammingpatterns.com/).

## Contents

* [1 - Introduction](./readme.md#introduction)
    * [1.1 - Architecture, Performance, and Games](./1-01.architecture-performance-and-games.md)
* [2 - Design Patterns Revisited](./2.design-patterns-revisited.md)
    * [2.2 - Command](2-02.command.md)
    * [2.3 - Flyweight](2-03.flyweight.md)
    * [2.4 - Observer](2-04.observer.md)
    * [2.5 - Prototype](2-05.prototype.md)
    * [2.6 - Singleton](2-06.singleton.md)
    * [2.7 - State](2-07.state.md)
* [3 - Sequencing Patterns](3.sequencing-patterns.md)
    * [3.8 - Double Buffer](3-08.double-buffer.md)
    * [3.9 - Game Loop](3-09.game-loop.md)
    * [3.10 - Update Method](3-10.update-method.md)
* [4 - Behavioral Patterns](4.behavioral-patterns.md)
    * [4.11 - Bytecode](4-11.bytecode.md)
    * [4.12 - Subclass Sandbox](4-12.subclass-sandbox.md)
    * [4.13 - Type Object](4-13.type-object.md)
* [5 - Decoupling Patterns](5.decoupling-patterns.md)
    * [5.14 - Component](5-14.component.md)
    * [5.15 - Event Queue](5-15.event-queue.md)
    * [5.16 - Service Locator](5-16.service-locator.md)
* [6 - Optimization Patterns](6.optimization-patterns.md)
    * [6.17 - Data Locality](6-17.data-locality.md)
    * [6.18 - Dirty Flag](6-18.dirty-flag.md)
    * [6.19 - Object Pool](6-19.object-pool.md)
    * [6.20 - Spatial Partition](6-20.spatial-partition.md)

## Introduction

At first, the challenge was just getting something working. Then, it became figuring out how to write programs bigger than what would fit in my head. Instead of just reading about "How to Program in C++", I started trying to find books about how to *organize* programs.  

A friend hands me a book: *Design Patterns: Elements of Reusable Object-Oriented Software*. Finally! The book I'd been looking for since I was a teenager. I read it cover to cover in one sitting. I still struggled with my own programs, but it was a relief to see that other people struggled too and came up with solutions. I felt like I finally had a couple of *tools* to use instead of just my bare hands.

They were so focused on *features* that organization went overlooked.

The more time I spent working on game code, the more bits of brilliance I found hiding under the surface. Unfortunately, "hiding" was often a good description. There were gems buried in the code, but many people walked right over them. I watched coworkers struggle to reinvent good solutions when examples of exactly what they needed wre nestled in the same codebase they were standing on.

That problem is what this book aims to solve. I dug up and polished the best patterns I've found in games, and presented them here so that we can spend our time inventing now things instead of *re*-inventing them.

I think this book is applicable to non-game software too. I could just as well have called this book *More Design Patterns*, but I think games make for more engaging examples. Do you really want to read another book about employee records and bank accounts?

[Next - Architecture, Performance, and Games](./1-01.architecture-performance-and-games.md)