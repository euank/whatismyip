# What's my ip?

I felt like running my own `ifconfig.me` style webpage so I could have
automated scripts that want to know their ip behind a NAT do so... without
having to hope someone else doesn't take theirs down.

This is implemented via nginscript in the hopes of being super-efficient!

It's not lost on me that just using the builtin nginx variables for this stuff would be more efficient. Shh.
