.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Cliff Shaffer
   :satisfies: summation; recurrence
   :topic: Math Background

Summations and Recurrence Relations
===================================

Most programs contain loop constructs.
When analyzing running time costs for programs with loops, we
need to add up the costs for each time the loop is executed.
This is an example of a :term:`summation`.
Summations are simply the sum of costs for some function applied to a
range of parameter values.
Summations are typically written with the following "Sigma"
notation:

.. math::

   \sum_{i=1}^{n} f(i).

This notation indicates that we are summing the value of
:math:`f(i)` over some range of (integer) values.
The parameter to the expression and its initial value are indicated
below the :math:`\sum` symbol.
Here, the notation :math:`i=1` indicates that the parameter is
:math:`i` and that it begins with the value 1.
At the top of the :math:`\sum` symbol is the expression :math:`n`.
This indicates the maximum value for the parameter :math:`i`.
Thus, this notation means to sum the values of :math:`f(i)` as
:math:`i` ranges across the integers from 1 through :math:`n`.
This can also be written
:math:`f(1) + f(2) + \cdots + f(n-1) + f(n)`.
Within a sentence, Sigma notation is typeset as
:math:`\sum_{i=1}^{n} f(i)`.

Given a summation, you often wish to replace it with an algebraic
equation with the same value as the summation.
This is known as a :term:`closed-form solution`,
and the process of replacing the summation with its closed-form
solution is known as solving the summation.
For example, the summation
:math:`\sum_{i=1}^{n} 1`
is simply the expression "1" summed :math:`n` times
(remember that :math:`i` ranges from 1 to :math:`n`).
Because the sum of :math:`n` 1s is :math:`n`,
the closed-form solution is :math:`n`.
The following is a list of useful summations,
along with their closed-form solutions.

.. math::
   :label: sum1

   \sum_{i = 1}^{n} i &=& \frac{n (n+1)}{2}.

.. math::
   :label: sum2

   \sum_{i = 1}^{n} i^2 &=& \frac{2 n^3 + 3 n^2 + n}{6} =
   \frac{n(2n + 1)(n + 1)}{6}.

.. math::
   :label: sum3

   \sum_{i = 1}^{\log n} n &=& n \log n.

.. math::
   :label: sum4

   \sum_{i = 0}^\infty a^i &=& \frac{1}{1-a}\ \mbox{for}
   \ 0 < a < 1.

.. math::
   :label: sum5

   \sum_{i=0}^{n} a^i &=& \frac{a^{n+1} - 1}{a - 1}\ \mbox{for}
   \ a \neq 1.

As special cases to this last summation, we have the following two:

.. math::
   :label: sum6

   \sum_{i = 1}^{n} \frac{1}{2^i} &=& 1 - \frac{1}{2^n},

.. math::
   :label: sum7

   \sum_{i = 0}^{n} 2^i &=& 2^{n+1} - 1.

As a corollary to :eq:`sum7`,

.. math::
   :label: sum8

   \sum_{i = 0}^{\log n} 2^i &=& 2^{\log n + 1} - 1 = 2n - 1.

Finally,

.. math::
   :label: IHalvesSum

   \sum_{i=1}^{n} \frac{i}{2^i} &=& 2 - \frac{n+2}{2^n}.

The sum of reciprocals from 1 to :math:`n`, called the
:term:`Harmonic Series` and written :math:`{\cal H}_n`, has a value
between :math:`\log_e n` and :math:`\log_e n + 1`.
To be more precise, as :math:`n` grows,
the summation grows closer to

.. math::
   :label: sum10

   {\cal H}_n \approx \log_e n + \gamma + \frac{1}{2n},

where :math:`\gamma` is Euler's constant and has the value 0.5772...

Most of these equalities can be proved easily by a
:ref:`proof by induction <Proofs>`.
Unfortunately, induction does not help us derive a closed-form
solution.
It only confirms when a proposed closed-form solution is correct.
There are techniques for deriving
:ref:`closed-form solutions <closed-form solution> <AdvSumm>`.

The running time for a recursive algorithm is most easily expressed by
a recursive expression because the total time for the recursive
algorithm includes the time to run the recursive
call(s).
A :term:`recurrence relation` defines a function by means of an
expression that includes one or more (smaller) instances of itself.
A classic example is the recursive definition for the
factorial function:

.. math::

   n! = (n-1)! \cdot n\ \mbox{for}\ n>1; \quad 1! = 0! = 1.

Another standard example of a recurrence is the Fibonacci
sequence:

   .. math::

      \mbox{Fib}(n) = \mbox{Fib}(n-1) + \mbox{Fib}(n-2)\ \mbox{for}\ n>2;
      \quad\mbox{Fib}(1) = \mbox{Fib}(2) = 1.

From this definition, the first seven numbers of the
Fibonacci sequence are

.. math::

   1, 1, 2, 3, 5, 8,\ \mbox{and}\ 13.

Notice that this definition contains two parts: the general
definition for :math:`\mbox{Fib}(n)` and the base cases for
:math:`\mbox{Fib}(1)` and :math:`\mbox{Fib}(2)`. 
Likewise, the definition for factorial contains a recursive part and
base cases.

Recurrence relations are often used to model the cost of recursive
functions.
For example, the number of multiplications required by a recursive
version of the factorial function for an input of size
:math:`n` will be zero when :math:`n = 0` or :math:`n = 1` (the base
cases), and it will be one plus the cost of calling ``fact`` on a
value of :math:`n-1`. 
This can be defined using the following recurrence:

.. math::

   \mathbf{T}(n) = \mathbf{T}(n-1) + 1\ \mbox{for}\ n>1;
   \quad \mathbf{T}(0) = \mathbf{T}(1) = 0.

As with summations, we typically wish to replace the recurrence
relation with a closed-form solution.
One approach is to expand the recurrence by replacing any
occurrences of :math:`\mathbf{T}` on the right-hand side with its
definition.

.. _FactRecurSol:

.. topic:: Example

   If we expand the recurrence
   :math:`\mathbf{T}(n) = \mathbf{T}(n-1) + 1`, we get 

   .. math::

      \begin{eqnarray*}
      \mathbf{T}(n) &=& \mathbf{T}(n-1) + 1\\
      &=& (\mathbf{T}(n-2) + 1) + 1.\\
      \end{eqnarray*}

   We can expand the recurrence as many steps as we like, but the goal is 
   to detect some pattern that will permit us to rewrite the recurrence
   in terms of a summation.
   In this example, we might notice that

   .. math::

      \mathbf{T}(n-2) + 1) + 1 = \mathbf{T}(n-2) + 2

   and if we expand the recurrence again, we get

   .. math::

      \mathbf{T}(n) = \mathbf{T}(n-2) + 2 = \mathbf{T}(n-3) + 1 + 2 =
      \mathbf{T}(n-3) + 3

   which generalizes to the pattern
   :math:`\mathbf{T}(n) = \mathbf{T}(n-i) + i`.
   We might conclude that

   .. math::

      \begin{eqnarray*}
      \mathbf{T}(n) &=& \mathbf{T}(n - (n-1)) + (n - 1)\\
      &=& \mathbf{T}(1) + n-1\\
      &=& n-1.
     \end{eqnarray*}

   Because we have merely guessed at a pattern and not actually proved
   that this is the correct closed form solution, we should use an
   :ref:`induction proof <FactRecurProof>` to complete the process.

.. topic:: Example

   A slightly more complicated recurrence is

   .. math::

      \mathbf{T}(n) = \mathbf{T}(n-1) + n; \quad \mathbf{T}(1) = 1.

   Expanding this recurrence a few steps, we get

   .. math::

      \begin{eqnarray*}
      \mathbf{T}(n) &=& \mathbf{T}(n-1) + n\\
      &=& \mathbf{T}(n-2) + (n-1) + n\\
      &=& \mathbf{T}(n-3) + (n-2) + (n-1) + n.\\
      \end{eqnarray*}

   We should then observe that this recurrence appears to have a
   pattern that leads to

   .. math::

      \begin{eqnarray*}
      \mathbf{T}(n) &=& \mathbf{T}(n-(n-1)) + (n-(n-2)) + \cdots + (n-1) + n\\
      &=& 1 + 2 + \cdots + (n-1) + n.
      \end{eqnarray*}

   This is equivalent to the summation :math:`\sum_{i=1}^n i`,
   for which we already know the closed-form solution.

There are
:ref:`many more techniques <closed-form solution> <Recurrence>`
to find closed-form solutions for recurrence relations.
