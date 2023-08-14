import { ReactNode } from 'react';
import Header from './Header';
import Collage from './Collage';

function Container({ children }: { children: ReactNode }) {
    return (
        <div className="before:content-[' '] relative mx-auto max-w-2xl before:relative before:left-1/2 before:top-1 before:my-8 before:inline-block before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-slate-700">
            {children}
        </div>
    );
}

export default function WhyCat() {
    return (
        <div className="min-h-screen bg-[#050709] p-3">
            <Header />
            <main className="mx-auto max-w-7xl">
                <h1 className="mx-auto w-fit text-center text-4xl font-black text-white">
                    Why should you have a cat?
                </h1>
                <div className="mx-auto my-5 h-1 w-[30%] bg-white" />
                <div className="rounded-3xl bg-[#E3E1DC] p-5">
                    <p className="mx-auto max-w-2xl text-lg">
                        Cats are one of the best pets you can get. If you are
                        hesitant to take on the responsibility of owning a pet,
                        you might want to look again at the benefits of having a
                        cat. They are sweet, quiet and independent, and hearing
                        a cat’s purr can melt your heart. Here are the top five
                        reasons you should own a cat.
                    </p>
                    <div className="mx-auto my-3 max-w-3xl">
                        <Collage />
                    </div>
                    <Container>
                        <h2 className="text-center text-2xl font-bold">
                            Cats can bathe themselves
                        </h2>
                        <p className="text-lg">
                            Cats are clean pretty much 100 percent of the time.
                            That means you never have to take the time out of
                            your day to perform the somewhat painstaking task of
                            washing and grooming your cat.
                        </p>
                    </Container>
                    <Container>
                        <h2 className="text-center text-2xl font-bold">
                            Cats will keep your house and yard rodent-free
                        </h2>
                        <p className="text-lg">
                            If you are not a fan of rats, chipmunk, voles or
                            mice in your home, owning a cat will take care of
                            that right away. Your cat may even bring you its
                            prize to make you proud!
                        </p>
                    </Container>
                    <Container>
                        <h2 className="text-center text-2xl font-bold">
                            Cats are low-maintenance and independent
                        </h2>
                        <p className="text-lg">
                            If you think you do not have the time or energy to
                            own a pet, then a cat could be perfect for you.
                            Taking care of a cat requires less responsibility
                            than some other animals. Those who have full-time
                            jobs can rest easy, knowing that their kitty can
                            take care of itself for the most part. And when you
                            do have extra time, cuddling up with your cat will
                            feel better than ever.
                        </p>
                    </Container>
                    <Container>
                        <h2 className="text-center text-2xl font-bold">
                            Cats are an eco-friendly pet choice
                        </h2>
                        <p className="text-lg">
                            Living a “green” lifestyle can be difficult, but a
                            cat is a great choice for potential pet owners
                            looking to stay eco-friendly. Studies show that the
                            lifetime resources needed to feed and care for a cat
                            have a smaller carbon footprint than for other
                            animals. Plus, most cats prefer fish to beef or
                            corn, which is better for the environment. You can
                            feel good about owning your kitty.
                        </p>
                    </Container>
                    <Container>
                        <h2 className="text-center text-2xl font-bold">
                            Cats can help reduce stress
                        </h2>
                        <p className="text-lg">
                            We all get stressed out, and people have many
                            different ways of relieving their stress. Cat owners
                            can reduce tensions by just stroking their furry
                            friend’s head. Petting a cat releases endorphins
                            into the brain, which makes you happier. Also, cats
                            have the softest fur!
                        </p>
                        <p className="text-lg">
                            There are so many more reasons that you should get a
                            cat to fill your home with love. Check out your
                            local shelter to find a kitty that really needs a
                            home.
                        </p>
                        <p className="mt-7 text-center text-lg">
                            By Paige Plumblee & Lauren Adams, AnimalKind
                            Volunteers
                        </p>
                        <p className="text-center text-lg">
                            Visit{' '}
                            <a
                                href="https://animalkind.org/"
                                className="font-bold"
                            >
                                AnimalKind
                            </a>{' '}
                            for more
                        </p>
                    </Container>
                </div>
            </main>
        </div>
    );
}
